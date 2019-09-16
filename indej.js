const TelegramBot = require('node-telegram-bot-api')

const token = '885225327:AAE98jWiyaELsIwOsmuHCeGKOqWO6l19IHM'

const bot = new TelegramBot(token, {polling: true})


bot.onText(/^\/start$/, function (msg) {
    const opts = {
        reply_to_message_id: msg.message_id,
        reply_markup: {
            resize_keyboard: true,
            one_time_keyboard: true,
            keyboard: [["Bağlantılar"],["Grubumuz", "İletişim"]]
            inline_keyboard: [[
        {
          text: 'Behzat Ç.',
          url: 'https://t.me/joinchat/AAAAAFMpqpyq42v6aJhgKA'
        },{
          text: 'Yerli Diziler',
          url: 'https://t.me/joinchat/AAAAAErjynpH6TWT0buuJw'
        }
    };

    bot.sendMessage(msg.chat.id, "Bakımda", opts);
});
