exports.run = (client, members) => {
  
client.user.setActivity(`on ${client.guilds.size} server(s) | ` + client.config.prefix + 'help');
  console.log(`Ready to serve on ${client.guilds.size} server(s), for ${client.users.size} user(s).`);
};
