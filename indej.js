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

bot.on('message', (msg) => {
    var bağlantılar = "Bağlantılar";
    if (msg.text.toString().toLowerCase().indexOf(bağlantılar) === 0) {
        console.log;
        bot.sendMessage(msg.chat.id, "Bakımda ", {
            "inline_keyboard": [[
        {
          text: 'Behzat Ç.',
          url: 'https://t.me/joinchat/AAAAAFMpqpyq42v6aJhgKA'
        },{
          text: 'Yerli Diziler',
          url: 'https://t.me/joinchat/AAAAAErjynpH6TWT0buuJw'
        }
      ]]
    }
  });
});         
