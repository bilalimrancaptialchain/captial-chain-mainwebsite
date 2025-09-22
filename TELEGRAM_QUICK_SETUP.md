# 🚀 Quick Telegram Setup Guide

## WordPress Admin Setup

The Telegram integration is now handled through the WordPress admin panel for better security and centralized management.

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

### Step 3: Configure in WordPress Admin
1. Go to your WordPress admin panel
2. Navigate to **Settings > Advanced Checkout**
3. Scroll down to the **Telegram Notifications** section
4. Check **"Enable Telegram notifications for popup email submissions"**
5. Enter your **Bot Token** from Step 1
6. Enter your **Chat ID** from Step 2
7. Click **Save Changes**

### Step 4: Test the Integration
1. Visit your main website
2. Submit an email through the popup
3. Check your Telegram for the notification!

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
