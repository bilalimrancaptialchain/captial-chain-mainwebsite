# 🚀 Quick Telegram Setup Guide

## Option 1: Automated Setup (Recommended)

Run the setup script which will guide you through the process:

```bash
npm run setup:telegram
```

This will:
- Ask for your bot token and chat ID
- Automatically update the configuration file
- Set up everything for you

## Option 2: Manual Setup

### Step 1: Create Telegram Bot
1. Open Telegram and search for `@BotFather`
2. Send `/newbot`
3. Choose a name: `Capital Chain Email Bot`
4. Choose a username: `capitalchain_email_bot`
5. Copy the bot token (looks like: `1234567890:ABCdefGHIjklMNOpqrsTUVwxyz`)

### Step 2: Get Your Chat ID
1. Search for `@userinfobot` on Telegram
2. Send any message
3. Copy your Chat ID (looks like: `123456789`)

### Step 3: Update Configuration
Edit `src/config/telegram.ts` and replace:
```typescript
BOT_TOKEN: 'YOUR_BOT_TOKEN_HERE',
CHAT_ID: 'YOUR_CHAT_ID_HERE',
```

With your actual values:
```typescript
BOT_TOKEN: '1234567890:ABCdefGHIjklMNOpqrsTUVwxyz',
CHAT_ID: '123456789',
```

## Step 4: Test the Integration

```bash
npm run test:telegram
```

You should receive a test message in your Telegram chat!

## Step 5: Deploy and Test

1. Deploy your application
2. Visit your website
3. Submit an email through the popup
4. Check your Telegram for the notification

## 🎯 What You'll Receive

When someone submits their email, you'll get a message like:

```
🎯 Capital Chain Email Capture

📧 Email: user@example.com
🌐 Source: main_website_popup
⏰ Time: 12/25/2023, 2:30:45 PM
🔗 Website: Capital Chain Main Site

Email captured from popup form
```

## 🔧 Troubleshooting

### Bot Not Sending Messages
- ✅ Verify bot token is correct
- ✅ Verify chat ID is correct
- ✅ Make sure bot is not blocked
- ✅ Check that bot has permission to send messages

### Configuration Issues
- ✅ Make sure `src/config/telegram.ts` has correct values
- ✅ Restart your development server after changes
- ✅ Check for typos in bot token or chat ID

### API Errors
- ✅ Check server logs for detailed error messages
- ✅ Verify the Telegram API is accessible
- ✅ Ensure bot token has necessary permissions

## 🚀 Ready to Go!

Once configured, your email capture popup will automatically send Telegram notifications for every email submission. The system is designed to be reliable with fallback options if Telegram is temporarily unavailable.

## 📞 Support

If you need help:
1. Check the troubleshooting section above
2. Verify all setup steps were completed
3. Test with the provided test script
4. Contact the development team for assistance
