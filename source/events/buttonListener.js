const { buttonURL } = require('../../config/WOK.json');
module.exports = (client, instance) => {
    // Create a new button listener
    client.on("interactionCreate", (interaction) =>  {
        if(!interaction.isButton()) return;
        console.log(`[ButtonListener] Created button interaction: ${interaction.id}`);
            // Get minutes since interaction was created
            let minutes = Math.round(Date.now() - interaction.message.createdTimestamp) / 60000;
            //  if a button is older then 15 and it is not expemted, delete it
            const interactionCustomURL = interaction.customId; 
            console.log(interactionCustomURL);
             // take buttonURL.timeExemptURL and add it to the interactionCustomURL
            
            timeTillDelete = 15;
            if(minutes > timeTillDelete && interaction.interactionCustomURL.includes(buttonURL.timeExemptURL.ping)) {
                // Delete the orginal message and make it emphialized
                interaction.message.delete();
                let newInteration = interaction.followUp({
                    content: `The Button is older then ${timeTillDelete}, please resend the command`,
                    emphialize: true
                })
                setTimeout(() => {
                    newInteration.delete();
                }, 5 * 1000);
            }
                // Delete the new interaction after 5 seconds
            // Now we know that the interaction is a button and it is the one we want to listen to
    });
}
module.exports.config = {
    displayName: 'Button Listener',
    dbName: 'buttonListener'
}