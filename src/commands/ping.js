const { SlashCommandBuilder } = require('@discordjs/builders');
const embedTemplates = require("../assets/templates/embedTemplates.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!'),
  async execute(interaction) { 
    return interaction.reply({embeds: [embedTemplates.response("Pong!")]})
  },
};
