process.env.NTBA_FIX_319 = 1;

const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '885225327:AAE98jWiyaELsIwOsmuHCeGKOqWO6l19IHM';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, `Merhaba, bot says: "linklere buradan ulaşabilirsin ${msg.from.firt_name}"`);
});
