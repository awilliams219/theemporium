require('dotenv').config(); //initialize dotenv
const { Client, Intents } = require('discord.js');
const { Sequelize } = require('sequelize');



const intents = new Intents();
intents.add(
  Intents.FLAGS.GUILDS,
  Intents.FLAGS.GUILD_MESSAGES,
  Intents.FLAGS.DIRECT_MESSAGES
);

const client = new Client({intents}); //create new client

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});




//make sure this line is the last line
client.login(process.env.CLIENT_TOKEN); //login bot using token