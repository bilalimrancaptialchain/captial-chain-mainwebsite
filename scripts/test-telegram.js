/**
 * Test script for Telegram bot integration
 * Run with: node scripts/test-telegram.js
 * 
 * Make sure to update src/config/telegram.ts with your credentials first!
 */

// Import the config (you'll need to compile TypeScript first or use ts-node)
// For now, we'll use environment variables or hardcoded values
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || 'YOUR_BOT_TOKEN_HERE';
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || 'YOUR_CHAT_ID_HERE';

async function testTelegramNotification() {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.error('❌ Missing Telegram credentials');
    console.log('Please set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID environment variables');
    process.exit(1);
  }

  const testData = {
    email: 'test@example.com',
    name: 'Test User',
    source: 'test-script',
    timestamp: new Date().toISOString(),
  };

  const message = `🧪 *Test Email Capture*
  
📧 *Email:* ${testData.email}
👤 *Name:* ${testData.name}
🌐 *Source:* ${testData.source}
⏰ *Time:* ${testData.timestamp}
🔗 *Website:* Capital Chain Main Site

_This is a test notification from the email capture system_`;

  try {
    console.log('🚀 Sending test notification...');
    
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
      console.error('❌ Telegram API error:', errorData);
      process.exit(1);
    }

    const result = await response.json();
    console.log('✅ Test notification sent successfully!');
    console.log('📱 Check your Telegram chat for the message');
    console.log('📊 Response:', JSON.stringify(result, null, 2));
    
  } catch (error) {
    console.error('❌ Failed to send test notification:', error);
    process.exit(1);
  }
}

// Run the test
testTelegramNotification();
