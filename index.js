//REMOVE ALL THE <> INSIDE THE EMBED 
const Discord = require('discord.js');
const { prefix, token } = require ('./config.json');
const client = new Discord.client();
const { Client, RichEmbed } = require('discord.js');

client.on('ready', () => {
    console.log(`Welcome bot by Oribuin - (Loaded) Playing in ${client.guilds.size} Servers`) //You can change this to whatever you wish it to say when you startup your bot! 
});
client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.name === '<Channel-Name>') 
// Change 'Channel-Name' to whatever channel you want the welcome message to be in!
    const embed = new RichEmbed()
    //This is where you start writing your embed, I will include as many features as I can in this!
    .setAuthor('<*Server Name*!>;)//This is going to be on the very top of the Embed, For the Author Thumnail im going to put the Bot's Profile Picture, I'm just testing this out, this wasnt planned, Don't blame me if it goes wrong :)
    .setTitle(`<Welcome to *Server Name*, ${member.displayName}>!`)//This will be the second line below .setAuthor, This will say "Welcome to *Server Name*, *Name of person who joined*"
    .setColor(<0xF08080>)//This is the color of the bar that is going to be on your embed, You only want to change the part after `0x`. The Colors are in Hex code. If I were to change it from the Coral Red to Teal i would change it from .setColor(0xF08080) to .setColor(0x008080)
    .setDescription(`<Welcome to *Server Name*, ${member.displayName}\nYou are currently in ${channel.name}!\n${guild.member.size}>`)//This a gray box that would be like normal discord text, You can use the markup language like ```Message``` or ``Message``, ectetera
    .setURL('>')//When you have this set, You can click on the .setTitle & it will take you to the link set!
    .setImage('<http://i.imgur.com/yVpymuV.png>')//This is going to be the Image underneath the Embed, I'm going to be using an example image for this Embed, Give me a second to check my files..
    .setThumbnail(`<${member.user.avatarURL}>`)//For this we are going to be putting the new member's Avatar! 
    .addBlankField(true)//This line is a boolean so it's either ``true`` or ``false``, If you dont want the blank field, Just remove the line.
    .addField("<Join our Minecraft Server!>",
    "< >> golinetwork.online << >")//You can seperate the lines on it so it can look cleaner I guess
    .addField("<Want to invite your friends to this server?>", "<[Discord Invite](https://discord.gg/c5JgrnA>", true)//The [Box] is the text that will show & in the brackets you are going to want to put the URL
    .addField("<You can add a number of fields, I wouldn't add too many since it would look at bit crazy>", "<)>", true)//I recommend adding an extra line or it will show as Undefined underneath
    //This is where we make it send to the channel list in "const channel = member.guild.channels.find(ch => ch.name === 'channel-name'"

    if (!channel) return;//This is basically saying: If it finds ch.name
    channel.send({embed})//it will return with this embed
});
client.login('NjQzNzM0MzI2Njc2MTYwNTMz.Xcu9Bg.mdCk0wB0GwbZQq1tAFHNAi8DHcU')
