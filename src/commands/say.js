const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName('say')
    .setDescription('Responds with what you tell it to')
    .addStringOption(option => option.setName('input').setDescription('What you want it to say').setRequired(true)),

  async execute(interaction) {
    const response = interaction.options.getString('input');
    return interaction.reply(response);
  },
}
