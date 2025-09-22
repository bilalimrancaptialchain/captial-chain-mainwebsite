import { NextRequest, NextResponse } from 'next/server';
import { TELEGRAM_CONFIG } from '@/config/telegram';

// Configure for static export
export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface EmailCaptureData {
  email: string;
  name?: string;
  source?: string;
  timestamp?: string;
}

// Telegram Bot Configuration
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || TELEGRAM_CONFIG.BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || TELEGRAM_CONFIG.CHAT_ID;

async function sendTelegramNotification(data: EmailCaptureData) {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.warn('Telegram credentials not configured');
    return false;
  }

  const message = `${TELEGRAM_CONFIG.MESSAGE_PREFIX}
  
📧 *Email:* ${data.email}
${data.name ? `👤 *Name:* ${data.name}` : ''}
${data.source ? `🌐 *Source:* ${data.source}` : ''}
⏰ *Time:* ${data.timestamp || new Date().toLocaleString()}
🔗 *Website:* Capital Chain Main Site

_Email captured from popup form_`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
        disable_web_page_preview: true,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Telegram API error:', errorData);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Failed to send Telegram notification:', error);
    return false;
  }
}

async function storeEmailInDatabase(data: EmailCaptureData) {
  // Store in WordPress database via REST API
  try {
    const response = await fetch('https://checkout.capitalchain.co/wp-json/advanced-checkout/v1/popup-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: data.email,
        name: data.name || '',
        source: data.source || 'main-site-popup',
        page_url: typeof window !== 'undefined' ? window.location.href : 'https://capitalchain.co',
      }),
    });

    if (response.ok) {
      const result = await response.json();
      console.log('Email stored successfully in WordPress:', result);
      return true;
    } else {
      const errorData = await response.json();
      console.error('WordPress API error:', errorData);
      return false;
    }
  } catch (error) {
    console.error('Failed to store email in database:', error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, source } = body;

    // Validate required fields
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { success: false, message: 'Valid email is required' },
        { status: 400 }
      );
    }

    const emailData: EmailCaptureData = {
      email: email.trim().toLowerCase(),
      name: name?.trim(),
      source: source || 'main-site-popup',
      timestamp: new Date().toISOString(),
    };

    // Send Telegram notification
    const telegramSent = await sendTelegramNotification(emailData);

    // Store in database
    const dbStored = await storeEmailInDatabase(emailData);

    // Return success if at least one operation succeeded
    if (telegramSent || dbStored) {
      return NextResponse.json({
        success: true,
        message: 'Email captured successfully',
        telegram_sent: telegramSent,
        database_stored: dbStored,
      });
    } else {
      return NextResponse.json(
        { success: false, message: 'Failed to process email capture' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Email capture API error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Email Capture API is running',
    timestamp: new Date().toISOString(),
  });
}
