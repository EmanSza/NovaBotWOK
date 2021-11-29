const { timeExemptCheck, timeExemptMessage, timeExemptMessage} = require('../utils/liisteners/utils')
module.exports = (client, instance) => {
    // Create a new button listener
    client.on("interactionCreate", (interaction) =>  {
        if(!interaction.isButton()) return;
        console.log(`[ButtonListener] Created button interaction: ${interaction.id}`);
         let timeCheck = timeExemptCheck();
         let timeMessage = timeExemptMessage()
        if(!timeCheck) return;
        if(timeMessage) return;
    });
}

module.exports.config = {
    displayName: 'Button Listener',
    dbName: 'buttonListener'
}