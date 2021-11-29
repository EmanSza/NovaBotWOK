const { buttonURL } = require('../../../config/WOK.json');
function timeExemptCheck(interaction) {
    //  if a button is older then 15 and it is not expemted, delete it
    const interactionCustomURL = interaction.customId; 
    console.log(interactionCustomURL);
     // take buttonURL.timeExemptURL and add it to the interactionCustomURL
    let timeExempt = false;
    timeTillDelete = 15;
    for(var i = 0; i > buttonURL.timeExemptURL.length; i++) {
        if(buttonURL.timeExemptURL[i] == interaction.customId) timeExempt = true;
        if(buttonURL.timeExemptURL[i] == interaction.customId) break;
    }
    return timeExempt;
}
function timeExemptMessage(interaction) {
    let returnValue = false;
// Get minutes since interaction was created
let minutes = Math.round(Date.now() - interaction.message.createdTimestamp) / 60000;

if(minutes > timeTillDelete && interaction.customId == buttonURL.timeExemptURL[i]) {
    // Delete the orginal message and make it emphialized
    interaction.message.delete();
    let newInteration = interaction.followUp({
        content: `The Button is older then ${timeTillDelete}, please resend the command`,
        emphialize: true
    })
    setTimeout(() => {
        newInteration.delete();
    }, 5 * 1000);
returnValue = true;
}
return returnValue;
}

module.exports = {
    timeExemptCheck, timeExemptMessage
}