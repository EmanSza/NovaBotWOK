const { buttonIDs } = require('../../config/WOK.json');
module.exports = (client, instance) => {
    // Create a new button listener
    client.on("interactionCreate", (interaction) =>  {
        console.log(`[EVENT] Button listener created for ${interaction.id}`);
        // Check if the interaction is a button
        if(!interaction.isButton()) return;
        // Loop through all the buttons IDs and check if the interaction is one of them
        for(let i = 0; i < buttonIDs.length; i++) {
            // If the ID does not match the interaction ID, continue
            if(buttonIDs[i] !== interaction.id) continue;
            console.log(`Button with the ID: ${buttonIDs[i]} has been pressed`);
        }
    });
}
module.exports.config = {
    displayName: 'Button Listener',
    dbName: 'buttonListener'
}