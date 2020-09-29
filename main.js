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
            console.log('this will send a help message to the author');
            message.author.send('Hello There!\nMy Name Is cwitebot\nHere are the commands that you can use:\nping, react, help, announcement, annoy\nFeel free to give me any suggestions for commands I should add in the future!');
        break;
        case 'help react':
            console.log('this will send a help message to the author');
            message.author.send('this will react to your message!');
        break;
        case 'ping':
            console.log('ping command has been executed');
            message.channel.send('pong!');
        break;
        case 'react':
            console.log('react command has been executed');
            message.react("🐵");
        break;
        case 'announcement':
            console.log('announcement command has been executed');
            message.channel.send('@everyone ANNOUNCEMENT COMMENCING! Head over to the announcement channel please');
        break;
        case 'mute':
            console.log('mute command has been executed');
            message.channel.send('get muted lol');
        break;
        case 'pong':
            console.log('pong command has been executed');
            message.channel.send('@everyone'  + ' ' + (args[1]));
            message.channel.send('@everyone'  + ' ' + (args[1]));
            message.channel.send('@everyone'  + ' ' + (args[1]));
          
        break;
        case 'annoy':
            console.log('annoyed ' + (args[1]) + ' succesfully');
            if((args[1]) === '@cwite'){
                break;
            }
            message.channel.send((args[1]));
            message.channel.send((args[1]));
            message.channel.send((args[1]));
        break;
        case 'admin':
            if((args[1]) === 'setName'){
                console.log('setname command has been executed');
                message.channel.setName((args[2]));
            }
            if((args[1]) === 'byeMark'){
                console.log('byemark command has been executed');
                message.channel.setNSFW(true, 'cause gamer');
            }
            if((args[1]) === 'hiMark'){
                console.log('hi mark command has been executed');
                message.channel.setNSFW(false, 'cause gamer');
            }
            if((args[1]) === 'delete'){
                console.log('deleted channel command has been executed');
                const channelname = message.channel.toString();
                message.author.send(channelname);
                message.channel.delete();
            }
            if((args[1]) === 'create'){
                console.log('created channel command has been executed');
                message.edit("!yoo do this lol");
                message.channel.send("Channel Has Been Created :)");
                message.guild.channels.create((args[2]), {
                    type: 'text'
                }).then(channel => {

                })
            }
            if((args[1]) === 'restart'){
                bot.destroy();
                bot.login(process.env.token);
            }
        break;
        case 'tell':
            console.log('tell command has been executed');
            message.channel.send((args[1]));
            message.delete();
        break;
        



    }


});







bot.login(process.env.token);
