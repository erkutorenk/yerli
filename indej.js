const TelegramBot = require('node-telegram-bot-api')

const token = '946950620:AAHxREIF9bZimQVk5k6-C0wfgL5ft_Tzam0'

const bot = new TelegramBot(token, {polling: true})


bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "Merhaba, " + msg.from.first_name + ". Kanallarımıza alttaki butonlardan ulaşabilirsin. ;)", {
        "reply_markup": {
             resize_keyboard: true,
            "keyboard": [["Kanallar"], ["Grubumuz", "iletişim"]]
        }
    });

});

var rand_kanallar = function () {
    return Math.floor(Math.random() * kanallar_collection.length);
}

var rand_grubumuz = function () {
    return Math.floor(Math.random() * grubumuz_collection.length);
}

var rand_iletişim = function () {
    return Math.floor(Math.random() * iletişim_collection.length);
}

bot.on('message', (msg) => {
    var kanallar = "kanallar";
    if (msg.text.toString().toLowerCase().indexOf(kanallar) === 0) {
        bot.sendDocument(msg.chat.id, "CAADAgAEAQAC_enaJt9auPo0lN67FgQ", {
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
        bot.sendDocument(msg.chat.id, "CAADAgAD8gAD_enaJtQUkuAXlxTfFgQ", {
         reply_markup: {
            inline_keyboard: [[
              {
                text: 'Müşteri Hizmetleri',
                url: 't.me/dizifilms'
              }
            ]]
          }
        });           
    }
});



