module.exports = {

    category: 'Moderation',
    description: 'Ban a User',
    
    slash: true,
    permissions: ['BAN_MEMBERS'],
    expectedArgs: '<user> <reason>',
    minArgs: 2,
    syntaxError: 'Incorrect usage! Please use "/ban {ARGUMENTS}"',
    
    // Invoked when the command is actually ran
    callback: ({ args, interaction }) => {
        // getMember returns GuildMember
       const user = interaction.options.getMember('user')
        
       // See if the user can be banned or not
       if(!user.bannable) {
           interaction.reply({
               content: "User is not Bannable",
               ephemeral: true
           })
       };

    }
}