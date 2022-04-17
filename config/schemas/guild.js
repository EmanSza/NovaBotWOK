const { Schema, model } = require('mongoose');

const guildSchema = Schema({
  _id: String,

    selectMenu: [{ 
        customId: String,
        isReaction: Boolean,
        options: [{
            label: String,
            discription: String,
            value: String,
            roleId: String,
        }]
     }],

    logChannel: {
        channel: String,
        enabled: Boolean,

    }
});
module.exports = model('guild', guildSchema);