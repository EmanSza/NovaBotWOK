module.exports = {
    category: 'Testing',
    description: 'Replies with pong', // Required for slash commands
    
    slash: true, // Create both a slash and legacy command
    testOnly: true, // Only register a slash command for the testing guilds
    
    callback: ({ message, interaction }) => {
      const reply = 'Pong!'
      // message is provided only for a legacy command

      // interaction is provided only for a slash command
      interaction.reply({
        content: reply
      })
    },
  }