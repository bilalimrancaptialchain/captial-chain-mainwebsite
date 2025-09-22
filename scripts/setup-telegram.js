/**
 * Setup script for Telegram bot integration
 * Run with: node scripts/setup-telegram.js
 */

const fs = require('fs');
const path = require('path');

console.log('🤖 Telegram Bot Setup for Capital Chain');
console.log('=====================================\n');

console.log('📋 Setup Instructions:');
console.log('1. Go to Telegram and message @BotFather');
console.log('2. Send /newbot and follow the instructions');
console.log('3. Copy your bot token');
console.log('4. Message @userinfobot to get your chat ID');
console.log('5. Enter the credentials below\n');

// Simple prompt function (Node.js doesn't have built-in readline in older versions)
function prompt(question) {
  return new Promise((resolve) => {
    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

async function setupTelegram() {
  try {
    const botToken = await prompt('Enter your Telegram Bot Token: ');
    const chatId = await prompt('Enter your Chat ID: ');
    
    if (!botToken || !chatId) {
      console.log('❌ Both bot token and chat ID are required!');
      process.exit(1);
    }
    
    // Update the config file
    const configPath = path.join(__dirname, '..', 'src', 'config', 'telegram.ts');
    const configContent = `/**
 * Telegram Bot Configuration
 * 
 * To set up your Telegram bot:
 * 1. Message @BotFather on Telegram
 * 2. Create a new bot with /newbot
 * 3. Get your bot token
 * 4. Get your chat ID by messaging @userinfobot
 * 5. Replace the values below
 */

export const TELEGRAM_CONFIG = {
  // Replace with your actual bot token from @BotFather
  BOT_TOKEN: '${botToken}',
  
  // Replace with your actual chat ID from @userinfobot
  CHAT_ID: '${chatId}',
  
  // Optional: Customize the notification format
  ENABLED: true,
  
  // Optional: Add a custom message prefix
  MESSAGE_PREFIX: '🎯 Capital Chain Email Capture',
};

// Example values (replace with your actual credentials):
// BOT_TOKEN: '1234567890:ABCdefGHIjklMNOpqrsTUVwxyz',
// CHAT_ID: '123456789',
`;

    fs.writeFileSync(configPath, configContent);
    
    console.log('\n✅ Configuration updated successfully!');
    console.log('📁 Updated file: src/config/telegram.ts');
    console.log('\n🧪 Test your setup:');
    console.log('npm run test:telegram');
    
  } catch (error) {
    console.error('❌ Setup failed:', error.message);
    process.exit(1);
  }
}

setupTelegram();
