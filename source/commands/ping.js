const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const { buttonURL } = require('../../config/WOK.json');
module.exports = {
    category: 'Testing',
    description: 'Replies with pong', // Required for slash commands
    
    slash: true, // Create both a slash and legacy command
    testOnly: true, // Only register a slash command for the testing guilds
    
    callback: ({ message, interaction }) => {
      
        // Create a Embed
        const embed = new MessageEmbed()
        .setTitle('Pong!')

        const row = new MessageActionRow()
        .addComponents(
          new MessageButton()
            .setCustomId(buttonURL.ping)
            .setLabel('Primary')
            .setStyle('PRIMARY'),
        );

      interaction.reply({
        embeds: [embed],
        components: [row]
      })
    },
  }