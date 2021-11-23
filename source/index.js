const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')
const path = require('path')
const { env } = require('process')
require('dotenv').config()
const { Intents } = DiscordJS
const client = new DiscordJS.Client({
  // These intents are recommended for the built in help menu
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
})
// Client ready event
client.on('ready', () => {
  new WOKCommands(client, {
    // The name of the local folder for your command files
    commandsDir: path.join(__dirname, 'commands'),
    testServers: ['822175987180896297']
  })
})
client.login(process.env.TOKEN);