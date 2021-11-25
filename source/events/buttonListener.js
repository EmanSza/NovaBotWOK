const { buttonURL } = require('../../config/WOK.json');
module.exports = (client, instance) => {
    // Create a new button listener
    client.on("interactionCreate") (async (interaction) => {
        console.log(`[EVENT] Button listener created for ${interaction.id}`);
        // Check if the interaction is a button
        if(!interaction.isButton()) return;
            // Get minutes since interaction was created
            let minutes = Math.round(Date.now() - interaction.message.createdTimestamp) / 60000;
            //  if a button is older then 15 and it is not expemted, delete it
            const interactionCustomURL = interaction.customId; 
            if(minutes > 15 && interaction.customId != buttonURL.timeExemptURL.interactionCustomURL) {
                // Delete the orginal message and make it emphialized
                interaction.message.delete();
                let newInteration = interaction.message.channel.send(`<@${interaction.message.author.id}>`, {
                    embed: {
                        color: 0xFF0000,
                        description: `Your button has been deleted because it was created over 15 minutes ago.`
                    }
                });
                // Delete the new interaction after 5 seconds
                setTimeout(() => {
                    newInteration.delete();
                }, 5 * 1000);
            }
            // Now we know that the interaction is a button and it is the one we want to listen to
    });
    console.log("Button Clicked")
}
module.exports.config = {

}