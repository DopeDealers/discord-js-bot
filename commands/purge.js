exports.run = (client, message, args) => {
    const user = message.mentions.users.first();
    const adminrankid = require("./settings.json");
    const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
    let has_managemessages = message.member.hasPermission("MANAGE_MESSAGES");

    if (has_managemessages) {
        if (!amount) return message.reply('Must specify an amount to delete!');
        if (amount > 100) return message.reply("You may not delete over 100 messages due to the API!");
        if (!amount && !user) return message.reply('Must specify a user and amount, or just an amount, of messages to purge!');
        message.channel.fetchMessages({
            limit: amount,
        }).then((messages) => {
            if (user) {
                const filterBy = user ? user.id : Client.user.id;
                messages = messages.filter(m => message.author.id === filterBy).array().slice(0, amount);
            }
            message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
            setTimeout(function() {
                message.reply("Deleted " + amount + " Messages!");
            }, 900);
        });
    } else if (!has_managemessages) {
        message.reply("You do not have the permission (MANAGE_MESSAGES) to run this!");
    }
};
