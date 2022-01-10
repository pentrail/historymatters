module.exports = {
  name: "guildMemberAdd",
  async execute(member) {
    const { welcomeChannelId } = require("../../config.json");

    member.guild.channels.cache.get(welcomeChannelId).send(`${member} has joined History Matters. We now have ${member.guild.memberCount} members. We hope you have a great time.`);
  },
} 
