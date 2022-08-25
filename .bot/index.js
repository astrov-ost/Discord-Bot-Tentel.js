const express = require("express")
const app = express()
const prefix = "!"
const Discord = require("discord.js")
const client = new Discord.Client({
intents: ["GUILDS", "GUILD_MESSAGES"]
})

app.get("/", (req, res) => {
 res.send("Проект работает")
})

app.listen(3000, () => {
 console.log("Бот запущен!")
})

client.on("messageCreate", message => {
if(message.content === `${prefix}привет`){
message.channel.send("привет, ${message.author.username}!")
}
if(message.content === `${prefix}ембед`) {
let embed1 = new Discord.MessageEmbed()
.setTitle("титл")
.setDescription("дескрипшн")
}
})

client.login(process.env.token) 

// to Shell: npm i express
// npm i discord.js@13.9
