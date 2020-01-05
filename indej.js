process.env.NTBA_FIX_319 = 1;

const TelegramBot = require('node-telegram-bot-api');

const token = '946950620:AAERgPhrje3BRsoFQs6TTfD47gQ3qKUsbqs'

const bot = new TelegramBot(token, {polling: true})

NTBA_FIX_319=1

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

var rand_belgesel = function () {
    return Math.floor(Math.random() * belgesel_collection.length);
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
                "keyboard": [["Yerli", "Yabancı", "Belgesel"], ["Geri dön"]]
            }
        });
    }
});


bot.on('message', (msg) => {
    var grubumuz = "grubumuz";
    if (msg.text.toString().toLowerCase().indexOf(grubumuz) === 0) {
        bot.sendMessage(msg.chat.id, '<a href="t.me/dizifilm">dizifilm</a>', {parse_mode: 'HTML'});
    }
});


bot.on('message', (msg) => {
    var belgesel = "belgesel";
    if (msg.text.toString().toLowerCase().indexOf(belgesel) === 0) {
        bot.sendDocument(msg.chat.id, "CAADAgAD_QAD_enaJi7yfdfXyVqoFgQ", {
         reply_markup: {
            inline_keyboard: [[
              {
                text: 'Belgeseller',
                url: 't.me/belgeseller'
              }
            ]]
           }
        });         
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
                text: 'Yerli Diziler',
                callback_data: 'dizifilm'
              }
           ],
           [                  
              {
                text: 'Behzat Ç.',
                url: 'https://t.me/joinchat/AAAAAFMpqpwDzVcJ16xxVA'
              },{
                text: 'Diğer Yerli Diziler',
                url: 'https://t.me/joinchat/AAAAAErjyno3jmPG_OJW2A'
              }
           ],
           [                  
              {
                text: 'Grup',
                url: 'https://t.me/dizifilm'
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
                text: 'Yabancı Diziler',
                callback_data: 'dizifilm'
              }
           ],
           [      
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
                url: 'https://t.me/chernobyltr'
              },{
                text: 'Westworld',
                url: 'http://t.me/westworldtr' 
              }
           ],
           [
              {
                text: 'Stranger Things',
                url: 'http://t.me/strangerthingstr'
              },{
                text: 'Dark',
                url: 'http://t.me/darkdizi' 
              }
           ],
           [
              {
                text: 'Black Mirror',
                url: 'http://t.me/blackmirrortr'
              },{
                text: 'Mr. Robot',
                url: 'http://t.me/mrrobottr' 
              }
           ],
           [
              {
                text: 'Big Little Lies',
                url: 'http://t.me/biglittleliestr'
              },{
                text: "The Handmaid's Tale",
                url: 'http://t.me/handmaidstaletr' 
              }
           ],
           [
              {
                text: 'The Witcher',
                url: 'http://t.me/thewitchertr'
              },{
                text: 'Band of Brothers',
                url: 'http://t.me/bandofbrotherstr' 
              }
           ],
           [
              {
                text: 'Sherlock',
                url: 'http://t.me/sherlocktr'
              },{
                text: 'Prison Break',
                url: 'http://t.me/prisonbreaktr' 
              }
           ],
           [
              {
                text: 'Grup',
                url: 'http://t.me/dizifilm'
              }
           ],
           [
              {
                text: 'Haberler',
                url: 'http://t.me/dizifilmarsiv'
              },{
                text: 'Dizi Film Linkleri',
                url: 'https://t.me/dizifilmlinkleri'
              }
           ],
           [
              {
                text: 'Film Arşivi',
                url: 'http://t.me/yabancifilm'
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



