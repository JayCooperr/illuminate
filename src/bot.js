import { Client, Intents } from 'discord.js';

const bot = new Client({ intents: [Intents.FLAGS.GUILDS] });
 
bot.on('ready', () =>  console.log(`${bot.user.username} is online`));
bot.on('message', async (msg) =>  {
    if (msg.author.bot) return;

    await msg.reply('Hi');
});
 
bot.login('ODc1NTM4NTUyODc4OTM2MDg1.YRW-0Q.piF2XTMPijQKLcYGQ-GGaQpb69Q');