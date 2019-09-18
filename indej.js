const TelegramBot = require('node-telegram-bot-api')

const token = '946950620:AAHxREIF9bZimQVk5k6-C0wfgL5ft_Tzam0'

const bot = new TelegramBot(token, {polling: true})


bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "Merhaba, " + msg.from.first_name + ". \nKanallarımıza alttaki butonlardan ulaşabilirsin. ;)", {
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

var rand_yerli = function () {
    return Math.floor(Math.random() * yerli_collection.length);
}

var rand_yabancı = function () {
    return Math.floor(Math.random() * yabancı_collection.length);
}

var rand_geri = function () {
    return Math.floor(Math.random() * geri_collection.length);
}


bot.on('message', (msg) => {
    var kanallar = "kanallar";
    if (msg.text.toString().toLowerCase().indexOf(kanallar) === 0) {
        bot.sendMessage(msg.chat.id, "Lütfen birini seçin", {
            "reply_markup": {
                 resize_keyboard: true,
                "keyboard": [["Yerli", "Yabancı"], ["Geri dön"]]
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


bot.on('message', (msg) => {
    var yerli = "yerli";
    if (msg.text.toString().toLowerCase().indexOf(yerli) === 0) {
        bot.sendDocument(msg.chat.id, "CAADAgADBwEAAv3p2iY_lT3SAtn7vhYE", {
         reply_markup: {
            inline_keyboard: [[
              {
                text: 'Behzat Ç.',
                url: 'https://t.me/joinchat/AAAAAFMpqpyq42v6aJhgKA'
              },{
                text: 'Diğer Yerli Diziler',
                url: 'https://t.me/joinchat/AAAAAErjynpH6TWT0buuJw'
              }
            ]]
          }
        });           
    }
});


bot.on('message', (msg) => {
    var yabancı = "yabancı";
    if (msg.text.toString().toLowerCase().indexOf(yabancı) === 0) {
        bot.sendDocument(msg.chat.id, "CAADAgAEAQAC_enaJt9auPo0lN67FgQ", {
         reply_markup: {
            inline_keyboard: [[
              {
                text: 'La Casa de Papel',
                url: 'http://t.me/lacasadepapeltr'
              },{
                text: 'Mindhunter',
                url: 'http://t.me/mindhunter2017'
              }
           ],
           [
              {
                text: 'Chernobyl',
                url: 'https://t.me/joinchat/AAAAAFMpqpyq42v6aJhgKA'
              }
            ]]
          }
        });           
    }
});


bot.on('message', (msg) => {
    var geri = "geri";
    if (msg.text.toString().toLowerCase().indexOf(geri) === 0) {
        bot.sendMessage(msg.chat.id, "Ana menü", {
         "reply_markup": {
             resize_keyboard: true,
            "keyboard": [["Kanallar"], ["Grubumuz", "iletişim"]]
          }
        });           
    }
});


