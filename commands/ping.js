exports.run = (client, message, args) => {

    if (args == "--noembed") return message.reply("**pong!**: " + Math.floor(client.ping) + "ms :ping_pong:");

    else {
      const Discord = require("discord.js");
      const embed = new Discord.RichEmbed()
          .setTitle("Ping Command")
          .setAuthor(client.user.username, client.user.avatarURL)
          .setColor("#8258FA")
          .setFooter(message.author.username, message.author.avatarURL)
          .setTimestamp(new Date())
          .setURL("https://www.speedtest.net/")
          .addField("Ping:", "**pong!** " + Math.floor(client.ping) + "ms :ping_pong:", true)
          .addBlankField(true)



      message.channel.send({
          embed
    });
  }

};
