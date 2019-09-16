const TelegramBot = require('node-telegram-bot-api')

const token = '885225327:AAE98jWiyaELsIwOsmuHCeGKOqWO6l19IHM'

const bot = new TelegramBot(token, {polling: true})


bot.onText(/^\/start$/, function (msg) {
  bot.sendMessage(msg.chat.id, "Merhaba, " + msg.from.first_name + ". Gizli kanalların davet bağlantılarına alttaki butonlardan ulaşabilirsin.", {
   "reply_markup": {
            "keyboard": [["Bağlantılar"], ["Grubumuz", "İletişim"]]
        }
    });
});

