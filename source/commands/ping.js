const { MessageEmbed } = require('discord.js');
module.exports = {
    category: 'Testing',
    description: 'Replies with pong', // Required for slash commands
    
    slash: true, // Create both a slash and legacy command
    testOnly: true, // Only register a slash command for the testing guilds
    
    callback: ({ message, interaction }) => {
      
        // Create a Embed
        const embed = new MessageEmbed()
        .setTitle('Pong!')

      interaction.reply({
        embeds: [embed]
      })
    },
  }