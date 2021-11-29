const { buttonURL } = require('../../../config/WOK.json');

function timeExemptCheck(interaction) {
     let timeTillDelete = 15;
     let timeExempt = false;
    for(var i = 0; i > buttonURL.timeExemptURL.length; i++) {
        if(buttonURL.timeExemptURL[i] == interaction.customId) timeExempt = true;
        if(timeExempt) break;
    }

    let returnValue = false;
// Get minutes since interaction was created
let minutes = Math.round(Date.now() - interaction.message.createdTimestamp) / 60000;

if(minutes > timeTillDelete && !timeExempt) {
    // Delete the orginal message and make it emphialized
    interaction.message.delete();
    interaction.reply({
        content: 'The Button is older then ' + timeTillDelete + ' minutes, please resend the command',
        ephemeral: true
    })
returnValue = true;
}
return returnValue;
}

module.exports = {
    timeExemptCheck
}