import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, source, trigger } = await request.json();

    // Validate email
    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Send to WordPress checkout site
    const wordpressResponse = await fetch('https://checkout.capitalchain.co/wp-json/wp/v2/popup-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        source: source || 'main_website_popup',
        trigger: trigger || 'unknown',
        timestamp: new Date().toISOString()
      }),
    });

    if (!wordpressResponse.ok) {
      console.error('WordPress API error:', await wordpressResponse.text());
      // Still return success to user even if WordPress fails
    }

    // Log the submission (you can also save to a database here)
    console.log('Popup email submission:', {
      email,
      source,
      trigger,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you! We\'ll be in touch soon.'
    });

  } catch (error) {
    console.error('Popup email API error:', error);
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
