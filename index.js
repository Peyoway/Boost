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
//If your a bot you get ignored simple as that. There can only be one!
client.on('message', message => {
    if(message.author.bot) return;
})

//Ok so now we are gonna have some like commands.. yeah I think those are important. Not too sure though.





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

