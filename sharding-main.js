/*
    Run this file instead of main.js if you want bot sharding

    DO NOT RUN THIS
    this is a W.I.P and wont work
*/

const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
var shard_amount = config.shard.amount;
const Manager = new Discord.ShardingManager('./main.js');

Manager.spawn(shard_amount);
