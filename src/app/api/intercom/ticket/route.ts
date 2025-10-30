import { NextResponse } from "next/server";

type CreateTicketRequest = {
  email: string;
  name: string;
  topic: string;
  message: string;
  hp?: string; // honeypot
};

// Very simple in-memory rate limiter (best-effort; serverless instances may reset)
const WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS = 10;
const ipToWindow: Map<string, { count: number; windowStart: number }> = new Map();

function getClientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  const realIp = req.headers.get("x-real-ip");
  if (realIp) return realIp.trim();
  return "unknown";
}

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const data = ipToWindow.get(ip);
  if (!data) {
    ipToWindow.set(ip, { count: 1, windowStart: now });
    return true;
  }
  if (now - data.windowStart > WINDOW_MS) {
    ipToWindow.set(ip, { count: 1, windowStart: now });
    return true;
  }
  if (data.count >= MAX_REQUESTS) {
    return false;
  }
  data.count += 1;
  return true;
}

function isValidEmail(email: string): boolean {
  return /.+@.+\..+/.test(email);
}

export async function POST(req: Request) {
  try {
    const ip = getClientIp(req);
    if (!rateLimit(ip)) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }

    const body = (await req.json()) as Partial<CreateTicketRequest>;
    const email = (body.email || "").trim();
    const name = (body.name || "").trim();
    const topic = (body.topic || "").trim();
    const message = (body.message || "").trim();
    const hp = (body.hp || "").trim();

    // Honeypot check
    if (hp) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }
    if (!name || !topic || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const accessToken = process.env.INTERCOM_ACCESS_TOKEN;
    const ticketTypeId = process.env.INTERCOM_TICKET_TYPE_ID;
    const teamId = process.env.INTERCOM_TEAM_ID;
    const assigneeId = process.env.INTERCOM_ASSIGNEE_ID;

    if (!accessToken || !ticketTypeId) {
      console.error("[ticket] Missing configuration:", {
        hasAccessToken: Boolean(accessToken),
        hasTicketTypeId: Boolean(ticketTypeId),
      });
      return NextResponse.json({ error: "Server not configured" }, { status: 500 });
    }

    const payload = {
      ticket_type_id: ticketTypeId,
      title: `Contact: ${topic}`,
      contacts: [{ email }],
      // Assign if provided
      ...(teamId ? { team_id: teamId } : {}),
      ...(assigneeId ? { assignee_id: assigneeId } : {}),
      // Map structured details into ticket attributes
      ticket_attributes: {
        priority: "High", // default as requested
        topic,
        name,
        message,
      },
    } as Record<string, unknown>;

    const res = await fetch("https://api.intercom.io/tickets", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/json",
        "Content-Type": "application/json",
        "Intercom-Version": "Unstable",
        "Idempotency-Key": crypto.randomUUID(),
      },
      body: JSON.stringify(payload),
    });

    const data: unknown = await res.json().catch(() => ({} as unknown));
    if (!res.ok) {
      console.error("[ticket] Intercom API error", res.status, data);
      return NextResponse.json(
        { error: "Intercom error", details: data },
        { status: res.status }
      );
    }

    // Success: return the created ticket minimal info
    type IntercomTicketMinimal = { id?: string | number; title?: string; state?: string };
    const ticket = data as IntercomTicketMinimal;
    return NextResponse.json(
      {
        ok: true,
        ticket: {
          id: ticket?.id,
          title: ticket?.title,
          state: ticket?.state,
        },
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("[ticket] Unexpected error", err);
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}


