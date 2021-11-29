const { timeExemptCheck } = require('../utils/liisteners/utils')
module.exports = (client, instance) => {
    client.on("interactionCreate", (interaction) =>  {
        if(!interaction.isButton()) return;
        console.log(`[ButtonListener] Created button interaction: ${interaction.id}`);
         let timeCheck = timeExemptCheck(interaction);
        if(timeCheck) return;

    });
}

// Config Export
module.exports.config = {
    displayName: 'Button Listener',
    dbName: 'buttonListener'
}