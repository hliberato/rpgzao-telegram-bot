var token = process.env.TOKEN;

var Bot = require('node-telegram-bot-api');
var bot;

if(process.env.NODE_ENV === 'production') {
  bot = new Bot(token);
  bot.setWebHook(process.env.OPENSHIFT_APP_DNS + bot.token);
}
else {
  bot = new Bot(token, { polling: true });
}

console.log('Bot server started in the ' + process.env.NODE_ENV + ' mode');

// // Matches "/echo [whatever]"
// bot.onText(/\/echo (.+)/, (msg, match) => {
//   // 'msg' is the received Message from Telegram
//   // 'match' is the result of executing the regexp above on the text content
//   // of the message
//
//   const chatId = msg.chat.id;
//   const resp = match[1];
//
//   bot.sendMessage(chatId, resp);
// });


bot.onText(/\/errocritico (.+)/, function onD20Text(msg, match) {
  const chatId = msg.chat.id;
  const damage = [
    "acabou de torce o joelho!",
    "quebrou o braço! Hahaha",
    "caiu no chão, e quebrou o nariz!",
    "torceu o pulso!",
    "foi atingido em um órgão vital! Chama logo um curandeiro porra!"
  ];
  let chosen = damage[Math.floor((Math.random() * damage.length) + 1)-1];
  let resp = match[1]+" "+chosen
  bot.sendMessage(chatId, resp);
});

bot.onText(/\/d20/, function onD20Text(msg) {
  const chatId = msg.chat.id;
  const resp = Math.floor((Math.random() * 20) + 1);

  bot.sendMessage(chatId, resp);
});

bot.onText(/\/d10/, function onD20Text(msg) {
  const chatId = msg.chat.id;
  const resp = Math.floor((Math.random() * 10) + 1);

  bot.sendMessage(chatId, resp);
});

bot.onText(/\/d8/, function onD20Text(msg) {
  const chatId = msg.chat.id;
  const resp = Math.floor((Math.random() * 8) + 1);

  bot.sendMessage(chatId, resp);
});

bot.onText(/\/d6/, function onD20Text(msg) {
  const chatId = msg.chat.id;
  const resp = Math.floor((Math.random() * 6) + 1);

  bot.sendMessage(chatId, resp);
});

bot.onText(/\/d4/, function onD20Text(msg) {
  const chatId = msg.chat.id;
  const resp = Math.floor((Math.random() * 4) + 1);

  bot.sendMessage(chatId, resp);
});

bot.onText(/\/odanilo/, function onDaniloText(msg) {
  const chatId = msg.chat.id;
  const resp = "é a mulher da minha vida";
  bot.sendMessage(chatId, resp);
});

// bot.onText(/^/, function (msg) {
//   var name = msg.from.first_name;
//   bot.sendMessage(msg.chat.id, 'Bem vindo ao Bot do grupo RPGzão, ' + name + '!').then(function () {
//   });
// });

module.exports = bot;
