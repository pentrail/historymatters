const embedTemplates = require("../assets/templates/embedTemplates.js");

module.exports = {
  name: 'messageCreate',
  async execute(message) {

    const args = message.content.slice(1).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    // Evaluate Command (Bot Owner Only)

    const clean = async (text) => {

      if (text && text.constructor.name == "Promise")
        text = await text;
      
      if (typeof text !== "string")
        text = require("util").inspect(text, {depth: 1});

      text = text
        .replace(/`/g, "`" + String.fromCharCode(8203))
        .replace(/@/g, "@" + String.fromCharCode(8203));

      // text = text.replaceAll(client.token, "[REMOVED]");

      return text
        
    }


    if (message.content.startsWith(`/eval`)) {

      if (message.author.id !== '792874163114475572') {
        message.channel.send({embeds: [embedTemplates.permissionDenied("You must be the bot owner in order to use this command")]});
        return;
      } 
      try {
        const evaled = eval(args.join(" "));
        const cleaned = await clean(evaled);
        message.channel.send(`\`\`\`js\n${cleaned}\n\`\`\``);
      } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${cleaned}\n\`\`\``);
      }
    }
  },
};
