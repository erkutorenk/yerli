process.env.NTBA_FIX_319 = 1;

const TelegramBot = require('node-telegram-bot-api');

const token = '885225327:AAE98jWiyaELsIwOsmuHCeGKOqWO6l19IHM';

const bot = new TelegramBot(token, {polling: true});

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, `Merhaba, bot says: "linklere buradan ulaşabilirsin ${msg.from.firt_name}"`)
})
