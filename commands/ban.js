exports.run = (client, message, args) => {

    let has_banusers = message.member.hasPermission("BAN_MEMBERS");

    if (has_banusers) {
      let member = message.mentions.members.first();
        if (!member) return message.reply("Please mention a valid member of this server");
          if (!member.bannable) return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");
            let reason = args.slice(1).join(' ');
              if (!reason) reason = "No reason provided";
                  const Discord = require("discord.js");
                  const embed = new Discord.RichEmbed()
                                    .setTitle("Ban")
                                    .setTimestamp(new Date())
                                    .setColor("#58ACFA")
                                    .addField("**User**:", `**${member.user.tag}**`, true)
                                    .addField("**Mod**:", `**${message.author.tag}**`, true)
                                    .addField("**Reason**", `**${reason}**`, true);
                  message.channel.send({embed});
                  member.ban(reason)
                  .catch(error =>
                  message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));

                } else if (!has_banusers) {
                  message.reply("You do not have the permission (BAN_MEMBERS) to run this!");
      }
};
