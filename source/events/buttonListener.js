const { buttonIDs } = require('../../config/WOK.json');
module.exports = (client, instance) => {
    // Create a new button listener
    client.on("interactionCreate", (interaction) =>  {
        console.log(`[EVENT] Button listener created for ${interaction.id}`);
        // Check if the interaction is a button
        if(!interaction.isButton()) return;
        // Loop through all the buttons IDs and check if the interaction is one of them
        for(let i = 0; i < buttonIDs.length; i++) {
            // if the interaction is a button, check if it is the one we want
            if(buttonIDs[i] !== interaction.customId && i >= buttonIDs.length) return;
        }
        // Now we know that the interaction is a button and it is the one we want to listen to
    });
}
module.exports.config = {
    displayName: 'Button Listener',
    dbName: 'buttonListener'
}