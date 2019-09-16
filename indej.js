const TelegramBot = require('node-telegram-bot-api')

const token = '885225327:AAE98jWiyaELsIwOsmuHCeGKOqWO6l19IHM'

const bot = new TelegramBot(token, {polling: true})


bot.on('message', (msg) => {
    var house = "Bağlantılar";
        bot.sendMessage(msg.chat.id, "İyi Seyirler ", {
            "reply_markup": {
                "keyboard": [["More house"], ["Back to choose style"]]
            }
        });
    }
});
