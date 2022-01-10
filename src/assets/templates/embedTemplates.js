const { MessageEmbed } = require('discord.js');

function permissionDeniedEmbed(description) {
    const permissionDenied = new MessageEmbed()
        .setColor('#ff5050')
        .setTitle("Permission Denied")
        .setDescription(description)
        .setTimestamp();
    return permissionDenied;
}

module.exports = {
    permissionDenied: permissionDeniedEmbed
}
