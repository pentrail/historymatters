const { SlashCommandBuilder } = require("@discordjs/builders");
const embedTemplates = require("../assets/templates/embedTemplates.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName('say')
    .setDescription('Responds with what you tell it to')
    .addStringOption(option => option.setName('input').setDescription('What you want it to say').setRequired(true)),

  async execute(interaction) {
    if (interaction.member.roles.cache.has("927905225342320671")) {
      const response = interaction.options.getString('input');
      return interaction.reply({embeds: [embedTemplates.response(response)]});
    } else {
      return interaction.reply({embeds: [embedTemplates.permissionDenied("You must be **Level 5** or above to use this command.")]});
    }
  },
}
