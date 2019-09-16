const TelegramBot = require('node-telegram-bot-api')

const token = '885225327:AAE98jWiyaELsIwOsmuHCeGKOqWO6l19IHM'

const bot = new TelegramBot(token, {polling: true})


bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "Merhaba, " + msg.from.first_name + ". Gizli kanalların davet bağlantılarına alttaki butonlardan ulaşabilirsin. ;)", {
        "reply_markup": {
             resize_keyboard: true,
            "keyboard": [["Bağlantılar"], ["Grubumuz", "iletişim"]]
        }
    });

});

var rand_bağlantılar = function () {
    return Math.floor(Math.random() * bağlantılar_collection.length);
}

var rand_grubumuz = function () {
    return Math.floor(Math.random() * grubumuz_collection.length);
}

var rand_iletişim = function () {
    return Math.floor(Math.random() * iletişim_collection.length);
}

bot.on('message', (msg) => {
    var bağlantılar = "bağlantılar";
    if (msg.text.toString().toLowerCase().indexOf(bağlantılar) === 0) {
        bot.sendMessage(msg.chat.id, "İyi Seyirler. + msg.from.first_name ", {
         reply_markup: {
            inline_keyboard: [[
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
    }
});


bot.on('message', (msg) => {
    var grubumuz = "grubumuz";
    if (msg.text.toString().toLowerCase().indexOf(grubumuz) === 0) {
        bot.sendMessage(msg.chat.id, "t.me/dizifilm");
    }
});


bot.on('message', (msg) => {
    var iletişim = "iletişim";
    if (msg.text.toString().toLowerCase().indexOf(iletişim) === 0) {
        bot.sendMessage(msg.chat.id, "t.me/dizifilms");
    }
});
