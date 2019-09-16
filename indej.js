const TelegramBot = require('node-telegram-bot-api')

const token = '885225327:AAE98jWiyaELsIwOsmuHCeGKOqWO6l19IHM'

const bot = new TelegramBot(token, {polling: true})


bot.onText(/^\/start$/, function (msg) {
  bot.sendMessage(msg.chat.id, "Gizli kanalların davet bağlantılarına alttaki butonlardan ulaşabilirsiniz.", {
   reply_markup: {
            resize_keyboard: true,
            one_time_keyboard: true,
            keyboard: [["Bağlantılar"],["Grubumuz", "İletişim"]
                       }
  });
});
                       
