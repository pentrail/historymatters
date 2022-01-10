const { SlashCommandBuilder } = require('@discordjs/builders');
const embedTemplates = require("../assets/templates/embedTemplates.js");

module.exports = {

  data: new SlashCommandBuilder()
    .setName('random')
    .setDescription('Returns a random number from 1 to a specified number')
    .addIntegerOption(option => option.setName('max').setDescription('The maximum number').setRequired(true)),

  async execute(interaction) {
    const maxNumber = interaction.options.getInteger('max');
    // Generates random number from 1 to the number specified
    let randomNumber = Math.floor(Math.random() * maxNumber) + 1;
    return interaction.reply({embeds: [embedTemplates.response(String(randomNumber))]});
  },

}
