const TelegramBot = require('node-telegram-bot-api')

const token = '885225327:AAE98jWiyaELsIwOsmuHCeGKOqWO6l19IHM'

const bot = new TelegramBot(token, {polling: true})

bot.sendMessage(msg.chat.id,'Linklere buradan ulaşabilirsiniz', {
    reply_markup: {
      inline_keyboard: [[
        {
          text: 'Behzat Ç.',
          url: 't.me/dizifilm'
        },{
          text: 'Music',
          callback_data: 'music'
        },{
          text: 'Cute monkeys',
          callback_data: 'cute-monkeys'
        }
      ]]
    }
  });
});
