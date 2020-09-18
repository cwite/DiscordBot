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
            message.author.send('Hello There!\nMy Name Is cwitebot\nHere are the commands that you can use:\nping, react, help, RIP, cursed, blursed, dog, announcement\nFeel free to give me any suggestions for commands I should add in the future!');
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
        var person  = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
          if(!person) return  message.reply("I CANT FIND THE USER " + person)

          let mainrole = message.guild.roles.find(role => role.name === "bronze");
          let role = message.guild.roles.find(role => role.name === "Muted");


          if(!role) return message.reply("Couldn't find the mute role.")


          let time = args[2];
          if(!time){
              return message.reply("You didnt specify a time!");
          }

          person.removeRole(mainrole.id)
          person.addRole(role.id);


          message.channel.send(`@${person.user.tag} has now been muted for ${ms(ms(time))}`)

          setTimeout(function(){

              person.addRole(mainrole.id)
              person.removeRole(role.id);
              console.log(role.id)
              message.channel.send(`@${person.user.tag} has been unmuted.`)
          }, ms(time));
        break;

    }


});







bot.login(process.env.token);
