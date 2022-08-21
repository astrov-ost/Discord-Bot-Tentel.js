const Discord = require('discord.js'); 
 const Token = process.env['TOKEN']; 
 const { Client, Intents } = require('discord.js'); 
 const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]}); 
 const keepAlive = require('./server.js'); 
  
 const prefix = '!'; 
  
 client.once('ready', async () => { 
     client.user.setActivity('!help', {type: 'PLAYING'}); 
     console.log('Ready!'); 
 }); 
  
 client.on('message', (message) => { 
     if(message.author.id === client.user.id) { return; } 
     if(message.author.bot) return; 
 }); 
  
 client.on('clickButton', async (button) => { 
    //commands go here 
     if(message.content == prefix + 'hi') { 
         message.channel.send('Hello!'); 
     } 
     if(message.content == prefix + 'ping') { 
         message.channel.send('Pong!'); 
     } 
 }); 
  
 client.on('messageUpdate', (oldMessage, newMessage) => { 
      
 }); 
  
 client.on('messageDelete', (message) => { 
      
 });  
  
 keepAlive(); 
 client.login(Token);
