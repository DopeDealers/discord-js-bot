exports.run = (client, message, args) => {

 if(args == "dm-me")
  message.author.send('👌')
 .catch(() => message.reply("I cant send a dm to you! please fix that. now."));

 else {
   message.channel.send("haha no i only wana slide in your DMs");
 }
};
