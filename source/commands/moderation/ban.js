module.exports = {

    category: 'Moderation',
    description: 'Ban a User',
    
    slash: true,
    testOnly: true,
    permissions: ['BAN_MEMBERS'],
    options: [
        {
          name: 'user', 
          description: 'User to ban',
          required: true,
          type: "USER", 
        },
        {
            name: 'reason',
            description: 'Reason for ban',
            required: true,
            type: "STRING"
        }
    ],
    syntaxError: 'Incorrect usage! Please use "/ban {ARGUMENTS}"',
    
    // Invoked when the command is actually ran
    callback: ({ args, interaction }) => {
        // getMember returns GuildMember
        const user = interaction.options.getMember('user')
        const reason = interaction.options.getString('reason')
         
        // See if bot has permissions to ban
        if(!user.guild.me.hasPermission('BAN_MEMBERS')) {
            return interaction.reply({
                content: 'I cannot ban user ' + user.user.tag + ' because I do not have the permission to ban members',
                ephemeral: true,
             })
            }
            
            // See if bot can ban user
        if(!user.bannable) {
            interaction.reply({
                content: 'I cannot ban user ' + user.user.tag + ' because they are higher than me in the role hierarchy',
                ephemeral: true,
            })
        }    
        
        // See if the user can be banned or not
       if(interaction.user.roles.highest.comparePositionTo(user.roles.highest <= 0)) {
              return interaction.reply({
                content: 'User' + user.user.tag + ' has a equal/higher role then you, so you cannot ban them',
                ephemeral: true,
              })
       }
       // Reason Checks
        if(!reason) {
            return interaction.reply({
                content: 'You must provide a reason for the ban',
                ephemeral: true,
            })
        }

       // Ban the user
         user.ban({ reason: args.slice(1).join(' ') })
            .then(() => {
                interaction.reply({
                    content: 'User ' + user.user.tag + ' has been banned',
                    ephemeral: true,
                })
            });
       // End of Callback
    }
}
/*
TODO:
    - Add a reason log for the ban
    - 
*/ 