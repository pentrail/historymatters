const { MessageEmbed } = require('discord.js');

function permissionDeniedEmbed(description) {
    const permissionDenied = new MessageEmbed()
        .setColor('#ff5050')
        .setTitle("Permission Denied")
        .setDescription(description)
        .setTimestamp();
    return permissionDenied;
}

function successEmbed(description) {
    const success = new MessageEmbed()
        .setColor('#009933')
        .setTitle("Success!")
        .setDescription(description)
        .setTimestamp();
    return success;
}

function responseEmbed(title) {
    const response = new MessageEmbed()
        .setColor('0099ff')
        .setTitle(title)
        .setTimestamp();
    return response;
}

module.exports = {
    permissionDenied: permissionDeniedEmbed,
    success: successEmbed,
    response: responseEmbed
}
