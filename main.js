const {Client, RichEmbed} = require('discord.js');
const bot = new Client();


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
        case 'role':
            message.author.send('put in !admin create role rolename color');
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
            message.delete();
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
            if((args[1]) === 'delete'){
                console.log('deleted channel command has been executed');
                message.channel.delete();
            }
            if((args[1]) === 'create'){
                if((args[2]) === 'role'){
                    message.guild.createRole({
                        name: args[3],
                        color: args[4]
                    })
                    .then(role => console.log("role created"))
                    .catch(err => console.log(err))

                } else {
                    createChannel();
                }  
            }
            if((args[1]) === 'restart'){
                message.author.send('You have restarted the discord bot');
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

    function createChannel()
    {
        console.log('created channel command has been executed');
        message.delete();
                message.edit("!yoo do this lol");
                const channelname = message.channel.toString();
                message.author.send('You have created the channel, ' + (args[2]));
                message.guild.channels.create((args[2]), {
                    type: 'text'
                }).then(channel => {

                })
    }


});







bot.login(process.env.token);
