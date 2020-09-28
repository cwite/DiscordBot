const {Client, RichEmbed} = require('discord.js');
const bot = new Client();
const ms = require("ms");



const PREFIX = '!';




bot.on('ready', () => {
    console.log('do not question the elevated one');
})

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");




    switch (args[0]) {
        case 'help':
            message.author.send('Hello There!\nMy Name Is cwitebot\nHere are the commands that you can use:\nping, react, help, announcement, annoy\nFeel free to give me any suggestions for commands I should add in the future!');
        break;
        case 'help react':
            message.author.send('this will react to your message!');
        break;
        case 'ping':
            message.channel.send('pong!');
        break;
        case 'react':
            message.react("🐵");
        break;
        case 'RIP':
            message.channel.send('R.I.P James Bond 2020 - 2020')
        break;
        case 'announcement':
            message.channel.send('@everyone ANNOUNCEMENT COMMENCING! Head over to the announcement channel please');
        break;
        case 'mute':
        message.channel.send('get muted lol');
        break;
        case 'pong':
          
            message.channel.send('@everyone'  + ' ' + (args[1]));
            message.channel.send('@everyone'  + ' ' + (args[1]));
            message.channel.send('@everyone'  + ' ' + (args[1]));
          
        break;
        case 'annoy':
            if((args[1]) === '@cwite'){
                break;
            }
            message.channel.send((args[1]));
            message.channel.send((args[1]));
            message.channel.send((args[1]));
        break;
        case 'admin':
            if((args[1]) === 'name'){
                message.channel.setName((args[2]));
            }
            if((args[1]) === 'byemark'){
                message.channel.setNSFW(true, 'cause gamer');
            }
            if((args[1]) === 'himark'){
                message.channel.setNSFW(false, 'cause gamer');
            }
            if((args[1]) === 'delete'){
                message.channel.delete((args[2]));
            }
            if((args[1]) === 'create'){
                message.guild.channels.create((args[2]), {
                    type: 'text'
                }).then(channel => {

                })
            }
            if((args[1]) === 'restart'){
                try {
                    message.channel.send("<a:Loading:575715719103381506> Attempting a restart...").then(msg => {
                      //msg.react('🆗');
                      setTimeout(function(){
                         msg.edit("<:CheckMark:550460857625346066> I should be back up now!");
                      }, 10000);
                    })
                    .then(message.client.destroy())
                    .then(client.login(process.env.token))
            
            
            
            
                      } catch(e) {
                        message.channel.send(`ERROR: ${e.message}`)
            
                }
            }
        break;



    }


});







bot.login(process.env.token);
