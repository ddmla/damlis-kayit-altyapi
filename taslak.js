const Discord = require("discord.js"),
client = new Discord.Client();                //tanımlama yapabilirsiniz modül, dosya vs
const config = require("../config.js")

module.exports.run = async (client, message, args) => {

//kod kısmınız

};

exports.config = {
  name: "",  //komutunuzun adı
  guildOnly: true, //burası kalsın
  aliases: [],  //komutu farklı isimde çalıştırmak için 
};