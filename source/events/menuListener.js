const SelectListener= require('../utils/listeners/SelectListener');
module.exports = (client, instance) => {
    client.on("interactionCreate", (interaction) =>  {
    if(!interaction.isSelectMenu) return;
        
    // Call The Select Listener Class
    new SelectListener(client, instance, interaction);

    // Console Log the interaction customID
    console.log(SelectListener.customID());
    });
}

// Config Export
module.exports.config = {
    displayName: 'Button Listener',
    dbName: 'buttonListener'
}