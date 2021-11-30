function interactionResponse(interaction, type, reason, hidden) {
    if(!hidden) hidden = false;
    // Return from function if no type to avoid errors
    if(!type) return false; 
    switch(type) {
        case(type == 'ban') :
        interaction.reply({
            content: reason,
            ephemeral: hidden
        })
        default: 
        return false;
    }
}