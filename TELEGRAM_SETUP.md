# Telegram Bot Setup for Email Capture Notifications

This guide will help you set up Telegram notifications for email captures from the main website.

## Prerequisites

- A Telegram account
- Access to the server where the application is deployed

## Step 1: Create a Telegram Bot

1. Open Telegram and search for `@BotFather`
2. Start a conversation with BotFather
3. Send the command `/newbot`
4. Follow the prompts to:
   - Choose a name for your bot (e.g., "Capital Chain Email Bot")
   - Choose a username for your bot (e.g., "capitalchain_email_bot")
5. BotFather will provide you with a **Bot Token** - save this securely

## Step 2: Get Your Chat ID

### Method 1: Using @userinfobot
1. Search for `@userinfobot` on Telegram
2. Start a conversation and send any message
3. The bot will reply with your Chat ID

### Method 2: Using @getidsbot
1. Search for `@getidsbot` on Telegram
2. Start a conversation and send any message
3. The bot will reply with your Chat ID

### Method 3: For Group Chats
1. Add your bot to the group
2. Send a message in the group
3. Visit: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
4. Look for the `chat.id` in the response

## Step 3: Configure Environment Variables

Create a `.env.local` file in your project root with:

```env
# Telegram Bot Configuration
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here

# Optional: Additional configuration
NEXT_PUBLIC_SITE_URL=https://capitalchain.co
```

## Step 4: Deploy and Test

1. Deploy your application with the environment variables
2. Test the email capture popup on your website
3. Check your Telegram chat for notifications

## Notification Format

When someone submits their email through the popup, you'll receive a message like:

```
🎯 New Email Capture

📧 Email: user@example.com
👤 Name: John Doe
🌐 Source: main_website_popup
⏰ Time: 12/25/2023, 2:30:45 PM
🔗 Website: Capital Chain Main Site

Email captured from popup form
```

## Troubleshooting

### Bot Not Sending Messages
- Verify the Bot Token is correct
- Verify the Chat ID is correct
- Check that the bot is not blocked
- Ensure the bot has permission to send messages

### Environment Variables Not Working
- Make sure `.env.local` is in the project root
- Restart your development server after adding variables
- Check that variable names match exactly (case-sensitive)

### API Errors
- Check the server logs for detailed error messages
- Verify the Telegram API is accessible from your server
- Ensure the bot token has the necessary permissions

## Security Notes

- Never commit your `.env.local` file to version control
- Keep your bot token secure and private
- Consider using environment-specific tokens for different deployments
- Regularly rotate your bot token if compromised

## Support

If you encounter issues:
1. Check the server logs for error messages
2. Verify all configuration steps were completed correctly
3. Test the bot token and chat ID independently
4. Contact the development team for assistance
