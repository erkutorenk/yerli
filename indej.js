const TelegramBot = require('node-telegram-bot-api')

const token = '885225327:AAE98jWiyaELsIwOsmuHCeGKOqWO6l19IHM'

const bot = new TelegramBot(token, {polling: true})


bot.onText(/^\/start$/, function (msg) {
  bot.sendMessage(msg.chat.id, "Merhaba, " + msg.from.first_name + ". Gizli kanalların davet bağlantılarına alttaki butonlardan ulaşabilirsin.", {
   reply_markup: {
            resize_keyboard: true,
            one_time_keyboard: true,
            keyboard: [["Bağlantılar"], ["Grubumuz", "İletişim"]]
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
    var electro = "electro";
    if (msg.text.toString().toLowerCase().indexOf(electro) === 0) {
        bot.sendMessage(msg.chat.id, "Here is your electro song " + msg.from.first_name);
        bot.sendMessage(msg.chat.id, electro_collection[rand_electro()]);
    }
});


bot.on('message', (msg) => {
    var house = "house";
    if (msg.text.toString().toLowerCase().indexOf(house) === 0) {
        console.log(count += 1);
        bot.sendMessage(msg.chat.id, "Here is your house song ", {
            "reply_markup": {
                "keyboard": [["More house"], ["Back to choose style"]]
            }
        });
    }
});

