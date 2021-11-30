const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')

const path = require('path')
require('dotenv').config()

// JSON Object For Cleaner Code
const { 
  testServersArray,
  ownerID,
  databaseSettings,
  disabledCommands
} = require('../config/WOK.json')

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
    setDefaultPrefix: '!',

    commandsDir: path.join(__dirname, 'commands'),
    featuresDir: path.join(__dirname, 'events'),
    disabledDefaultCommands: disabledCommands,

    botOwners: ownerID,
    testServers: testServersArray,

    // Database
     mongoUri: process.env.MONGODB_URI,
     dbOptions: databaseSettings,

     // Boolean Statements
     debugger: false
  });

})
.setCategorySettings([
  {
    name: 'Misc',
    emoji: '🃏'
  },
  {
    name: 'Moderation',
    emoji: '🚨'
  }
])

// Login to Discord with TOKEN, if token is empty throw error.
if(!process.env.TOKEN) throw new Error('No token found');
client.login(process.env.TOKEN);