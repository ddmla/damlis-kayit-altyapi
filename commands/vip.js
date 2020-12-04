const Discord = require("discord.js");
const adiş = require('../config.js');
const damla = new Discord.Client();

exports.run = (client, message, args) => {

    const damliş = adiş.vip;

    if (!message.member.roles.cache.has(adiş.teyitci)) return message.reply('Yetersiz yetki!');  //eğer yetkisi yoksa dönüt mesajı attırıyoruz.

    let dmlaa = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if (!dmlaa) return message.channel.send(`Bir kullanıcı belirtmelisin. **Örnek: @Ada/424544845290536970**`)
    const ada = message.guild.member(dmlaa)

    const serendia = new Discord.MessageEmbed()
        .setDescription(`🎉 ${ada} adlı kişiye <@&${damliş}> rolü başarıyla verildi.`)
        .setColor("RANDOM")
        .setFooter("Akeno - Kayıt Sistemi")

    const squad = new Discord.MessageEmbed()
        .setDescription(`🎉 ${ada} adlı kişiden <@&${damliş}> rolü başarıyla alındı.`)
        .setColor("RANDOM")
        .setFooter("Akeno - Kayıt Sistemi")

    if (message.guild.member(ada).roles.cache.has(damliş.id)) {
        message.guild.member(ada).roles.remove(damliş).then(() => {
            message.channel.send(squad);
        });
    } else {
        message.guild.member(ada).roles.add(damliş).then(() => {
            message.channel.send(serendia);
        });
    }
}

exports.config = {
  name: "vip",
  guildOnly: true,
  aliases: ["v"],
};
