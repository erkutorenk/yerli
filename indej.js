const TelegramBot = require('node-telegram-bot-api')

const token = '885225327:AAE98jWiyaELsIwOsmuHCeGKOqWO6l19IHM'

const bot = new TelegramBot(token, {polling: true})


bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "Merhaba, " + msg.from.first_name + ". Gizli kanalların davet bağlantılarına alttaki butonlardan ulaşabilirsin. ;)", {
        "reply_markup": {
             resize_keyboard: true,
            "keyboard": [["Bağlantılar", "Grubumuz"]]
        }
    });

});

var rand_bağlantılar = function () {
    return Math.floor(Math.random() * bağlantılar_collection.length);
}

var rand_grubumuz = function () {
    return Math.floor(Math.random() * grubumuz_collection.length);
}

bot.on('message', (msg) => {
    var bağlantılar = "bağlantılar";
    if (msg.text.toString().toLowerCase().indexOf(bağlantılar) === 0) {
        bot.sendMessage(msg.chat.id, "Here is your electro song " + msg.from.first_name);
        bot.sendMessage(msg.chat.id, bağlantılar_collection[rand_bağlantılar()]);
    }
});


bot.on('message', (msg) => {
    var grubumuz = "grubumuz";
    if (msg.text.toString().toLowerCase().indexOf(grubumuz) === 0) {
        bot.sendMessage(msg.chat.id, "Here is your house song ", {
            "reply_markup": {
                "keyboard": [["More house"], ["Back to choose style"]]
            }
        });
    }
});
