const Discord = require("discord.js")
const ada = new Discord.Client();
const damla = require("./config.js")
const moment = require('moment')
require("moment-duration-format")
  moment.locale("tr")
const fs = require("fs");                                        // akeno ❤ Damla ❤ Ada 
require('./util/Loader.js')(ada);

ada.commands = new Discord.Collection();
ada.aliases = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  console.log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    console.log(`${props.config.name} komutu yüklendi.`);
    console.log(`Bu altyapı Akeno sunucusunda sizler için paylaşıldı.`)
    ada.commands.set(props.config.name, props);
    props.config.aliases.forEach(alias => {
      ada.aliases.set(alias, props.config.name);
    });
  });                                                                     // akeno ❤ Damla ❤ Ada
});

ada.on('guildMemberAdd', async damliş => {

  const akeno = damla.sunucuid

  const adiş = damla.kayitKanal;

  ada.guilds.cache.get(akeno).channels.cache.get(adiş).send(`
  
  • ${damliş} sunucumuza hoş geldin. Seninle beraber **${damliş.guild.memberCount}** kişiye ulaştık :tada: 
  
  • Hesabınızın kuruluş tarihi: **${moment(damliş.user.createdAt).format('DD/MM/YYYY | HH:mm:ss')}**

  • Sesli odalara girerek kaydınızı yaptırabilirsiniz. <@&${damla.teyitci}> sizinle ilgilenecektir.

  `)
});

// Damla&Ada sevgilerle.

ada.login(damla.token)
