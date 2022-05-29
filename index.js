const bb = require('bot-brother');
const bot = bb({
  key: <BotTokenHere>,
  sessionManager: bb.sessionManager.memory(),
  polling: { interval: 0, timeout: 1 }
});
 
bot.command('sticker')
.invoke(function (ctx) {
    // Returns promise.
    setInterval(function(){
        ctx.sendSticker('CAACAgUAAxkBAAEUfBVik2i1A-i8KNOMdGREFjbN3HcIfgACsAYAAn9EkVTBnBULpQRK8iQE')
    },300000)
});
console.log('Bot is running...');

