exports.run = (client, message, args) => {

  if (args == "--noembed") return message.channel.send("Help menu! \n\n | "
  + client.config.prefix + "ping \n " + "|"
  + client.config.prefix + "purge <@member> [1/100] \n " + "|"
  + client.config.prefix + "reload [command name] \n " + "|"
  + client.config.prefix + "eval [js code]");
  else {
    const Discord = require("discord.js");
    const embed = new Discord.RichEmbed()
        .setTitle("Help Command")
        .setColor("#8258FA")
        .setFooter(message.author.username, message.author.avatarURL)
        .setTimestamp(new Date())
        .addField("| " + client.config.prefix + "ping", "|")
        .addField("| " + client.config.prefix + "purge <@member> [1/100]", "|")
        .addField("| " + client.config.prefix + "reload [command name]", "|")
        .addField("| " + client.config.prefix + "eval [js code]", "|")

    message.channel.send({
        embed
    });
  }
};
