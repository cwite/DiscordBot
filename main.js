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
        case 'cursed':
            message.channel.send("yikes looks like these arent working, suck it up u fat neek");
        break;
        case 'blursed':
            message.channel.send("yikes looks like these arent working, suck it up u fat neek");
        break;
        case 'dog':
            message.channel.send("yikes looks like these arent working, suck it up u fat neek");
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
            
            message.channel.send((args[1]));
            message.channel.send((args[1]));
            message.channel.send((args[1]));
        break;



    }


});







bot.login(process.env.token);
