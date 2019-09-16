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

var rand_electro = function () {
    return Math.floor(Math.random() * electro_collection.length);
}

var rand_house = function () {
    return Math.floor(Math.random() * house_collection.length);
}

bot.on('message', (msg) => {
    var electro = "Bağlantılar";
    if (msg.text.toString().toLowerCase().indexOf(electro) === 0) {
        bot.sendMessage(msg.chat.id, "Bakımda " + msg.from.first_name);
        bot.sendMessage(msg.chat.id, electro_collection[rand_electro()]);
    }
});


bot.on('message', (msg) => {
    var house = "Grubumuz";
    if (msg.text.toString().toLowerCase().indexOf(house) === 0) {
        bot.sendMessage(msg.chat.id, "Bakımda ", {
            "reply_markup": {
                "keyboard": [["Deneme"], ["Deneme"]]
            }
        });
    }
});
