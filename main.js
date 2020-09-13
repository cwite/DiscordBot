const {Client, RichEmbed} = require('discord.js');
const bot = new Client();
 

 
const PREFIX = '!';


 
 
bot.on('ready', () => {
    console.log('whomst has awaken the elevated one');
})
 
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");

bot.on('guildMemberAdd', member =>{
    const channel = member.guild.channels.find(channel => channel.name === "announcements");
    if(!channel) return;

    channel.send(`Welcome ${member}, now go away`);
});
    

    switch (args[0]) { 
        case 'help':
            message.author.send('Hello There!\nMy Name Is cwitebot\nHere are the commands that you can use:\nping, react, help, RIP, cursed, blursed, dog');
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
            image(message, 'cursed image');
        break;
        case 'blursed':
            image(message, 'blursed image');
        break;
        case 'dog':
            image(message, 'dog');
        break;
        
    }
 
 
});
 




  
                        
bot.login(process.env.token);