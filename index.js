/*

██████╗░░█████╗░░█████╗░░██████╗████████╗
██╔══██╗██╔══██╗██╔══██╗██╔════╝╚══██╔══╝
██████╦╝██║░░██║██║░░██║╚█████╗░░░░██║░░░
██╔══██╗██║░░██║██║░░██║░╚═══██╗░░░██║░░░
██████╦╝╚█████╔╝╚█████╔╝██████╔╝░░░██║░░░
╚═════╝░░╚════╝░░╚════╝░╚═════╝░░░░╚═╝░░░
This bot was made by Peyoway#1989 in Discord.js
Although, Discord.js updates every 5 seconds so maybe this wasn't the best choice.
🚀 Boost!!!!!🚀
Discord Documentation ---> https://discord.js.org/#/docs/main/stable/general/welcome
Trust me you're going to need it.
*/

//I'm not to sure but I think we need discord.js and a discord client to make this.
const Discord = require("discord.js");
const client = new Discord.Client();
//Oh and we also kinda need our token and prefix.
const settings = require("./settings.json");
//So uh when the bot guy is ready and logged in, make him set his set his custom status to some cool thing.
//What? Bots don't have custom status?
//DID I STUTTER??!?!?!
client.on("ready", () => {
    console.log(`Boost has started! We are currently rocking a decent ${client.users.size} users and a ${client.channels.size} servers.`)
    client.user.setPresence({
        status: 'online',
        activity: {
            //NGL I really wanted to put Streaming your behavior to your mom but it was too long.
            name: 'your server.',
            type: 'WATCHING',
        }
    })
});
//I would never reuse my old code...
client.on('guildCreate', guild => {
  console.log(`Oh cool, I just joined ${guild.name} on ${new Date()}`);
})
client.on('guildDelete', guild => {
  console.log(`Aw man... ${guild.name} kicked me out of their server on ${new Date()} `);
})


//Ok so now we are gonna have some like commands.. yeah I think those are important. Not too sure though.

//Also this code is credited to https://gist.github.com/eslachance/3349734a98d30011bb202f47342601d3 with a great tutorial.
//Thanks bro!
client.on("message", message => {
 //If your a bot you get ignored simple as that. There can only be one!
    if(message.author.bot) return;
    const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
});
//Yeah funny story, this code originally belonged to a Combat bot. Unfortunately, Piggy released before I could get it off the ground.
//Kind of sad about it ngl.
client.on('message', message => {
      if (message.content === settings.prefix+"ping") {
      //I really like embeds. They make things look nice.
      const m = message.channel.send("Testing...");
      const pingEmbed = new Discord.MessageEmbed()
        .setColor('#34eb86')
        .setTitle('Pong!')
        .setDescription(`:ping_pong:`)
        .setThumbnail('https://i.ibb.co/RN6fHn7/pong.jpg')
      message.channel.send(pingEmbed);
     }
    });
client.on('message', message => {
    const kicker = message.author
    if (message.content === settings.prefix+"kick")

         if (kicker.hasPermission('KICK_MEMBERS')) {
               const member = message.mentions.members.first();
                 member.kick();
         }
        /*The following is in protector code.
        if(message.author.bot) return;
        if (member.hasPermission('KICK_MEMBERS')) {
                  if(!member.kickable)
                    return message.reply("No matter how hard I try I can't seem to be able to kick this person.");
                    if(!member)
                          return message.reply("Who am I kicking? Make sure you mention them in your message.");
                    let reason = args.slice(1).join('');
                        if(!reason) reason = "👻No reason provided, they ghosted you.👻";
                            member.kick(reason)
                                .catch(error => message.reply(`Hmmmm... ${message.author} there seems to be an error. I will let the my creator know! Error was: ${error}`));
                                message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

        }

            return message.reply("You don't have permission to do that silly!")*/
});


client.login(settings.token);
/*
------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------
Well, that's the end of the code. Here's some rocket ships for now.
                           *     .--.
                                  / /  `
                 +               | |
                        '         \ \__,
                    *          +   '--'  *
                        +   /\
           +              .'  '.   *
                  *      /======\      +
                        ;:.  _   ;
                        |:. (_)  |
                        |:.  _   |
              +         |:. (_)  |          *
                        ;:.      ;
                      .' \:.    / `.
                     / .-'':._.'`-. \
                     |/    /||\    \|
               jgs _..--"""````"""--.._
             _.-'``                    ``'-._
           -'                                '-
                                                   ,:
                                                 ,' |
                                                /   :
                                             --'   /
                                             \/ />/
                                             / <//_\
                                          __/   /
                                          )'-. /
                                          ./  :\
                                           /.' '
                                         '/'
                                         +
                                        '
                                      `.
                                  .-"-
                                 (    |
                              . .-'  '.
                             ( (.   )8:
                         .'    / (_  )
                          _. :(.   )8P  `
                      .  (  `-' (  `.   .
                       .  :  (   .a8a)
                      /_`( "a `a. )"'
                  (  (/  .  ' )=='
                 (   (    )  .8"   +
                   (`'8a.( _(   (
                ..-. `8P    ) `  )  +
              -'   (      -ab:  )
            '    _  `    (8P"Ya
          _(    (    )b  -`.  ) +
         ( 8)  ( _.aP" _a   \( \   *
       +  )/    (8P   (88    )  )
          (a:f   "
------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------
*/

