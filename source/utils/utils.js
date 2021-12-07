const guildSchema = require('../../guild.json');
const { MessageEmbed } = require('discord.js');


function sendLog(type, reason, user, interaction) {
    // Find the guild within the guild scehma
    const guildDB = guildSchema.findById(interaction.guild.id);
    if(!guildDB) return;

    const embed = new MessageEmbed()
    .setTitle(`${type} Log`)
    .setColor(0x00AE86)
    .addFields(
        { name: 'User', value: `${user.tag} (${user.id})`, inline: true },
        { name: 'Reason', value: reason, inline: true },
        { name: 'Moderator', value: `${interaction.author.tag} (${interaction.author.id})`, inline: true }
    )
    
    interaction.guild.channels.cache.get(guildDB.logChannel.channel).send(embed);

};


module.exports = {
sendLog
}