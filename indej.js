const TelegramBot = require('node-telegram-bot-api')

const token = '885225327:AAE98jWiyaELsIwOsmuHCeGKOqWO6l19IHM'

const bot = new TelegramBot(token, {polling: true})


bot.on('message', (msg) => {
    var house = "Bağlantılar";
    if (msg.text.toString().toLowerCase().indexOf(house) === 0) {
        bot.sendMessage(msg.chat.id, "Here is your house song ", {
            "reply_markup": {
                "keyboard": [["More house"], ["Back to choose style"]]
            }
        });
    }
});


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
});    

bot.on('message', (msg) => {
    var house = "Bağlantılar";
    if (msg.text.toString().toLowerCase().indexOf(house) === 0) {
        bot.sendMessage(msg.chat.id, "Bakımda ", {
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
  });
});
