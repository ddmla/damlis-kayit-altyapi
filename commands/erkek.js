const Discord = require('discord.js');
const dmlaa = require('../config.js');
const client = new Discord.Client();

exports.run = async (client, message, args) => {

    try {

        if (!message.member.roles.cache.has(dmlaa.teyitci)) return message.reply('Yetersiz yetki!'); //eğer yetkisi yoksa dönüt mesajı attırıyoruz.

        const ada = message.mentions.members.first() || message.guild.members.cache.get(args[0]) //üyeyi çekiyoruz yani hem etiket hemde id ile olur.
        const damla = args[1] //isim
        const damliş = args[2] //yaş

        if (!ada) return message.channel.send(new Discord.MessageEmbed().setDescription(`Bir kullanıcı belirtmelisin. **Örnek: @Ada/322840359174668318**`).setFooter(`Akeno - Kayıt Sistemi`).setColor("RANDOM").setTimestamp());
        if (!damla) return message.channel.send(new Discord.MessageEmbed().setDescription(`İsim belirtmelisin. **Örnek: Damla**`).setFooter(`Akeno - Kayıt Sistemi`).setColor("RANDOM").setTimestamp());
        if (!damliş) return message.channel.send(new Discord.MessageEmbed().setDescription(`Yaş belirtmelisin. **Örnek: 17**`).setFooter(`Akeno - Kayıt Sistemi`).setColor("RANDOM").setTimestamp());

        message.channel.send(new Discord.MessageEmbed().setDescription(`**__Kayıt İşlemi Başarılı__**\n\n<:KannaSip:783940980083916800> Kayıt Edilen Kişi: ${ada}\n<:KannaSip:783940980083916800> Kayıt Yapan Yetkili: ${message.author}\n<:KannaSip:783940980083916800> Kayıt İşleminde Verilen Rol: <@&${dmlaa.erkekRol}>\n<:KannaSip:783940980083916800> Kayıt İşleminde Alınan Rol: <@&${dmlaa.kayitsiz}>`).setFooter(`Akeno - Kayıt Sistemi`).setColor("RANDOM").setTimestamp())
        ada.setNickname(`${damla} | ${damliş}`).catch(e => message.channel.send(`Benden Üstte Olduğu İçin İsmini Değiştiremedim.`))
        await ada.roles.add(dmlaa.erkekRol) //eğer başka rolleriniz de varsa onları da ek olarak congif.json da belirtip alt satıra kopyalayıp yapın.
        await ada.roles.remove(dmlaa.kayitsiz)
        message.guild.channels.cache.get(dmlaa.genelChat).send(`${ada} aramıza katıldı :tada: Sunucumuz şuanda **${message.guild.memberCount}** kişi!`)

    } catch (e) {
        message.channel.send(`Kayıt yetkim veya rolüm yok.`)
    }

};
exports.config = {
  name: "erkek",
  guildOnly: true,
  aliases: ["e"],
};
