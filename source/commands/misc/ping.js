const { MessageEmbed } = require('discord.js');
module.exports = {
    category: 'Misc',
    description: 'Replies with pong', // Required for slash commands
    
    slash: true, 
    testOnly: true, 
    
    callback: ({  interaction }) => {
      
        // Create a Embed
        const embed = new MessageEmbed()
        .setTitle('Pong!')

      interaction.reply({
        embeds: [embed],
      })
    },
  }