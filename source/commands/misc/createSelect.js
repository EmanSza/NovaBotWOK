const { MessageEmbed } = require('discord.js');
const { CommandErrors } = require('wokcommands');
module.exports = {
    category: 'Misc',
    description: 'Creats a Select Menu, Mainly for Reaction Roles', // Required for slash commands
    slash: true, 
    testOnly: true, 
    SyntaxError: '/createSelect <unquieId> <true/false> <amountOfOptions>',
    
    callback: ({  interaction }) => {
        const customId = interaction.options.getString('customId');
        const reaction = interaction.options.getString('reaction')
        const amountOfOptions = interaction.options.getInt('amountOfOptions')

        let schema =  interaction.guildSchema.findById(interaction.guild.id)
        if(!schema) interaction.guildScehma.findByIdAndUpdate(interaction.guild.id, { $set: { _id: interaction.guild.id } }, { upsert: true, new: true })
        if(!schema) return interaction.message.channel.send(new MessageEmbed().setColor('RED').setDescription('[Database Error] Could not find or create a guild schema.\nPlease contact a developer. if the error continues'))

        if(!customId) return interaction.message.channel.send(new MessageEmbed().setColor('RED').setDescription('[Syntax Error] You must provide a customId'))

        if(!reaction) return interaction.message.channel.send('[Syntax Error] Please provide a value for the reaction [true/false]')
        if(reaction !== 'true' && reaction !== 'false') return interaction.message.channel.send('[Syntax Error] Please provide a boolean value for the reaction [true/false]')

        if(!amountOfOptions) return interaction.message.channel.send('[Syntax Error] Please provide an amount of options')

        if(customId.length > 10) return interaction.message.channel.send(new MessageEmbed().setColor('RED').setDescription('[Syntax Error] The customId must be 10 characters or less'))
        if(reaction.length > 10) return interaction.message.channel.send('[Interaction Error] Reaction can not be longer than 10 characters')
        if(amountOfOptions > 10) return interaction.message.channel.send('[Interaction Error] Amount of options can not have more than 8 options')

        



    },
  }
