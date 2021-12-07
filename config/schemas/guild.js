const { Schema, model } = require('mongoose');

const guild = Schema({
  _id: String,

    selectMenu: [{ 
        customId: String,
        options: [{
            label: String,
            discription: String,
            value: String,
        }]
     }],

    logChannel: {
        channel: String,
        enabled: Boolean,

    }
});
module.exports = model('guild', guildSchema);