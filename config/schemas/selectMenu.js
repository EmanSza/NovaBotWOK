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
});
module.exports = model('guild', guildSchema);