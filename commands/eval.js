exports.run = (client, message, args) => {

    const owners = require("./settings.json");

    const Discord = require("discord.js");

    function clean(text) {
        if (typeof(text) === "string")
            return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
    }

    const args2 = message.content.split(" ").slice(1);

    if (message.author.id == owners.botowner) {
        if (args2 < 1) return message.reply("You must provide some (JS) code to eval!");
        else if (args2 == "client.token") return message.reply("no lmao"); // hides the evaluation of your bot token
        if (args2 > 1999) return message.reply("You may not have more than 2,000 in this EVAL \n returns nothing");
        try {
            const code = args2.join(" ");
            let evaled = eval(code);

            if (typeof evaled !== "string")
                evaled = require("util").inspect(evaled);

            // Generates a code for the Request
            const code3 = Math.floor(Math.random() * (99999999 - 11111111)) + 11111111;

            // Generates a random Hex Color code
            const code2 = "000000".replace(/0/g, function() {
                return (~~(Math.random() * 16)).toString(16);
            });

            // Self explanitory. creates Embed
            const embed = new Discord.RichEmbed()
                .setTitle("Eval Request Code - " + code3)
                .setColor(code2)
                .addField("**OutPut**:", "\`\`\`" + clean(evaled) + " \`\`\`")
                .addField("**Input**:", "\`\`\`" + args2 + " \`\`\`")
                .setTimestamp(new Date())
                .setFooter(message.author.username, message.author.avatarURL)

            // sends embed above ^^^^
            message.channel.send({
                embed
            });
        } catch (err) {

            message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
        }
    } else if (message.author.id !== owners.botowners) {
        return message.reply("You are not a bot owner!");
    }
};
