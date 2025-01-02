const { cmd, commands } = require('../command');
const config = require('../config');
const os = require('os');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, fetchJson , runtime ,sleep } = require('../lib/functions')
const { checkAccess, isPremiumUser, blacklistedJIDs, premiumJIDs, dataLoaded } = require('../lib/accessControl');
const mono = "```"

    function detectPlatform() {
      if (process.env.REPL_ID) return 'Replit';
      if (process.env.HEROKU_APP_NAME) return 'Heroku';
      if (process.env.KOYEB_PROJECT_ID) return 'Koyeb';
      if (process.env.AWS_LAMBDA_FUNCTION_NAME) return 'AWS Lambda';
      if (process.env.VERCEL) return 'Vercel';
      if (process.env.RENDER) return 'Render';
      if (process.env.NETLIFY) return 'Netlify';
      if (process.env.WORKFLOW) return 'Workflow';
      if (process.env.FLYIO_APP_NAME) return 'Fly.io';
      return 'Unknown Platform';
    }
    const platformName = detectPlatform();

    

cmd({
      pattern: "runtime",
      desc: "Chek Bot Runtime",
      category: "main",
      react: "⏰",
      filename: __filename
    }, async (conn, mek, m, { from, reply }) => {
      try {
          const senderNumber = m.sender;
          const isGroup = m.isGroup || false;

          // Check access permissions
          if (!checkAccess(senderNumber, isGroup)) {
              if (blacklistedJIDs.includes(senderNumber)) {
                  return reply("*🚫 You are blacklisted. Access denied.*");
              } else {
                  return reply("*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*");
              }
          }

          // System and memory information
          const uptime = runtime(process.uptime());
          const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
          const totalMemory = Math.round(os.totalmem() / 1024 / 1024);
          const cpuArch = os.arch();
          const cpuCores = os.cpus().length;
          const systemType = os.type();
          const freeMemory = (os.freemem() / 1024 / 1024).toFixed(2);

          // Custom message for Render platform
          let platformMessage = '';
          if (platformName === 'Render') {
              platformMessage = '\n🌟 You are currently hosting on Render! Enjoy seamless deployments.';
          }

          // Status message to be sent


          let desc = `*🚀 𝖱𝗎𝗇𝗍𝗂𝗆𝖾 : ${uptime}*`





          // Sending the image with caption
          const sentMsg = await conn.sendMessage(from, {


          text: desc,
          contextInfo: {

          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
          newsletterName: 'ＳＨＡＤＯＷ  |   ＭＤ 📌 ',
          newsletterJid: "120363296705464049@newsletter",
          },
          externalAdReply: {
              title: `Runtime ⏰`,
              body: `Can't Find The Information. You Can Try Another Way. Error Code 4043`,
              thumbnailUrl: `https://i.ibb.co/LP1dXT2/IMG-20241208-WA0281.jpg`,
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
              }
                  }
              }, { quoted: mek });

      } catch (e) {
          console.error(e);
          reply(`*Error:* ${e.message}`);
      }
    });


        




cmd({
      pattern: "alive",
      alias: ["online"],
      desc: "Chek Bot Alive",
      category: "main",
      react: "🧚🏻‍♀️",
      filename: __filename
    },
    
    async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{
          const senderNumber = m.sender;
          const isGroup = m.isGroup || false;

          // Check access permissions
          if (!checkAccess(senderNumber, isGroup)) {
              if (blacklistedJIDs.includes(senderNumber)) {
                  return reply("*🚫 You are blacklisted. Access denied.*");
              } else {
                  return reply("*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*");
              }
          }

          // System and memory information
          const uptime = runtime(process.uptime());
          const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
          const totalMemory = Math.round(os.totalmem() / 1024 / 1024);
          const cpuArch = os.arch();
          const cpuCores = os.cpus().length;
          const systemType = os.type();
          const freeMemory = (os.freemem() / 1024 / 1024).toFixed(2);

          // Custom message for Render platform
          let platformMessage = '';
          if (platformName === 'Render') {
              platformMessage = '\n🌟 You are currently hosting on Render! Enjoy seamless deployments.';
          }

          // Status message to be sent


          let desc = `*👋🏻 හායි ${pushname}, I AM DARK SHADOW - MD WA BOT 🧬*

👾 _ABOUT THE BOT_ 

⏳ RAM USAGE -*${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
⏰ UPTIME -* ${runtime(process.uptime())}
🕹️ PREFIX -* ${config.PREFIX}

*ACD MD Version 2.0.0*🔗

This is a whatsapp bot that helps us to download our needed things. such as videos , songs , documents , apks etc. Dark Shadow MD is the upgrade version of ACD MD whatsapp bot ( Version 2.0.0 ) . Special Thanks to owners Crazy Chutta / Crazy Dina / Loku ash And Drk Vala 🌟

☘️ HAVE A NICE DAY ☘️

🎯 MORE DETAILS 

| ➤ .repo
| ➤ .menu
| ➤ .speed
| ➤ .system
| ➤.runtime

> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ - ᴍᴅ*`





          // Sending the image with caption
          const sentMsg = await conn.sendMessage(from, {


          text: desc,
          contextInfo: {

          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
          newsletterName: 'ＳＨＡＤＯＷ  |   ＭＤ 📌',
          newsletterJid: "120363296705464049@newsletter",
          },
          externalAdReply: {
              title: `I'm Alive Now 👨‍💻`,
              body: `Can't Find The Information. You Can Try Another Way. Error Code 4043`,
              thumbnailUrl: `https://i.ibb.co/LP1dXT2/IMG-20241208-WA0281.jpg`,
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
              }
                  }
              }, { quoted: mek });

      } catch (e) {
          console.error(e);
          reply(`*Error:* ${e.message}`);
      }
    });

















cmd({
      pattern: "allmenu",
      alias: ["panel"],
      desc: "Get Bot Menu",
      category: "main",
      react: "📁",
      filename: __filename
},
    
    async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    
let menu = {
main: '',
download: '',
anime: '',
group: '',
owner: '',
convert: '',
news: '',
ai: '',
fun: '',
search: '',
fun: '',
voice: '',
other: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
 }
}
   
          const senderNumber = m.sender;
          const isGroup = m.isGroup || false;

          // Check access permissions
          if (!checkAccess(senderNumber, isGroup)) {
              if (blacklistedJIDs.includes(senderNumber)) {
                  return reply("*🚫 You are blacklisted. Access denied.*");
              } else {
                  return reply("*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*");
              }
          }

          // System and memory information
          const uptime = runtime(process.uptime());
          const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
          const totalMemory = Math.round(os.totalmem() / 1024 / 1024);
          const cpuArch = os.arch();
          const cpuCores = os.cpus().length;
          const systemType = os.type();
          const freeMemory = (os.freemem() / 1024 / 1024).toFixed(2);

          // Custom message for Render platform
          let platformMessage = '';
          if (platformName === 'Render') {
              platformMessage = '\n🌟 You are currently hosting on Render! Enjoy seamless deployments.';
          }

          // Status message to be sent


          let desc = `*👋🏻 හායි ${pushname}, I AM DARK SHADOW MD WA BOT ♻️*

*Command Panel 💱*

*⏳ RAM USAGE -*${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
*⏰ UPTIME -* ${runtime(process.uptime())}
*🕹️ PREFIX -* ${config.PREFIX}

LIST OF MENU ❇️
*────────────────────────────────*
*| ➤ 1 || OWNER MENU*
 ${menu.owner}
*| ➤ 2 || CONVERT MENU*
 ${menu.convert}
*| ➤ 3 || AI MENU*
 ${menu.ai}
*| ➤ 4 || DOWNLOAD MENU*
 ${menu.download}
*| ➤ 5 || GROUP MENU*
 ${menu.group}
*| ➤ 6 || ANIME MENU*
 ${menu.anime}
*| ➤ 7 || FUN MENU*
 ${menu.fun}
*| ➤ 8 || NEWS MENU*
 ${menu.news}
*| ➤ 9 || OTHER MENU*
 ${menu.other}
*────────────────────────────────*

_🔢 Reply The Number That You Want_

> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ - ᴍᴅ`





          // Sending the image with caption
          const sentMsg = await conn.sendMessage(from, {


          text: desc,
          contextInfo: {

          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
          newsletterName: 'ＳＨＡＤＯＷ  |   ＭＤ 📌',
          newsletterJid: "120363296705464049@newsletter",
          },
          externalAdReply: {
              title: `SHADOW-MD Menu List`,
              body: `Can't Find The Information. You Can Try Another Way. Error Code 4043`,
              thumbnailUrl: `https://i.ibb.co/LP1dXT2/IMG-20241208-WA0281.jpg`,
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
              }
                  }
              }, { quoted: mek });

      } catch (e) {
          console.error(e);
          reply(`*Error:* ${e.message}`);
      }
    });


cmd({
      pattern: "owner",
      desc: "Chek Bot Owner",
      category: "main",
      react: "👨‍💻",
      filename: __filename
    },
    
    async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{
          const senderNumber = m.sender;
          const isGroup = m.isGroup || false;

          // Check access permissions
          if (!checkAccess(senderNumber, isGroup)) {
              if (blacklistedJIDs.includes(senderNumber)) {
                  return reply("*🚫 You are blacklisted. Access denied.*");
              } else {
                  return reply("*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*");
              }
          }

          // System and memory information
          const uptime = runtime(process.uptime());
          const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
          const totalMemory = Math.round(os.totalmem() / 1024 / 1024);
          const cpuArch = os.arch();
          const cpuCores = os.cpus().length;
          const systemType = os.type();
          const freeMemory = (os.freemem() / 1024 / 1024).toFixed(2);

          // Custom message for Render platform
          let platformMessage = '';
          if (platformName === 'Render') {
              platformMessage = '\n🌟 You are currently hosting on Render! Enjoy seamless deployments.';
          }

          // Status message to be sent


          let desc = `*👋 Hello ${pushname}*

*👾 ＳＡＨＡＳ-ＭＤ 👨‍💻💗*

> *𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢* 

*⚡ᴏᴡɴᴇʀ ɴᴀᴍᴇ -: ꜱᴀʜᴀꜱ ɴᴇᴛʜꜱᴀʀᴀ (ꜱᴀʜᴀꜱ ᴛᴇᴄʜ)*
*⚡ɴᴜᴍʙᴇʀ* -: 94718913389
*⚡ʏᴏᴜᴛᴜʙᴇ -:* https://www.youtube.com/@Sahas_Tech
*⚡ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ-:* https://whatsapp.com/channel/0029VaiTjMlK5cDLek3bB533

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*`





          // Sending the image with caption
          const sentMsg = await conn.sendMessage(from, {


          text: desc,
          contextInfo: {

          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
          newsletterName: 'ＳＨＡＤＯＷ  |   ＭＤ 📌',
          newsletterJid: "120363296705464049@newsletter",
          },
          externalAdReply: {
              title: `SHADOW-MD Owner Information`,
              body: `Can't Find The Information. You Can Try Another Way. Error Code 4043`,
              thumbnailUrl: `https://i.ibb.co/LP1dXT2/IMG-20241208-WA0281.jpg`,
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
              }
                  }
              }, { quoted: mek });

      } catch (e) {
          console.error(e);
          reply(`*Error:* ${e.message}`);
      }
    });


cmd({
      pattern: "support",
      desc: "To get the bot informations.",
      category: "main",
      react: "⛓",
      filename: __filename
    },
    
    async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{
          const senderNumber = m.sender;
          const isGroup = m.isGroup || false;

          // Check access permissions
          if (!checkAccess(senderNumber, isGroup)) {
              if (blacklistedJIDs.includes(senderNumber)) {
                  return reply("*🚫 You are blacklisted. Access denied.*");
              } else {
                  return reply("*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*");
              }
          }

          // System and memory information
          const uptime = runtime(process.uptime());
          const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
          const totalMemory = Math.round(os.totalmem() / 1024 / 1024);
          const cpuArch = os.arch();
          const cpuCores = os.cpus().length;
          const systemType = os.type();
          const freeMemory = (os.freemem() / 1024 / 1024).toFixed(2);

          // Custom message for Render platform
          let platformMessage = '';
          if (platformName === 'Render') {
              platformMessage = '\n🌟 You are currently hosting on Render! Enjoy seamless deployments.';
          }

          // Status message to be sent


          let desc = `*👋 Hello ${pushname}*

*👨‍💻SHADOW-MD Support Channels💗*

*Youtube Channel Link:* https://www.youtube.com/@Sahas_Tech

*Whatsapp Channel Link:* https://whatsapp.com/channel/0029VaiTjMlK5cDLek3bB533

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*`





          // Sending the image with caption
          const sentMsg = await conn.sendMessage(from, {


          text: desc,
          contextInfo: {

          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
          newsletterName: 'ＳＨＡＤＯＷ  |   ＭＤ 📌',
          newsletterJid: "120363296705464049@newsletter",
          },
          externalAdReply: {
              title: `SHADOW-MD Support Channels`,
              body: `Can't Find The Information. You Can Try Another Way. Error Code 4043`,
              thumbnailUrl: `https://i.ibb.co/LP1dXT2/IMG-20241208-WA0281.jpg`,
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
              }
                  }
              }, { quoted: mek });

      } catch (e) {
          console.error(e);
          reply(`*Error:* ${e.message}`);
      }
    });


cmd({
      pattern: "repo",
      desc: "To get the repo informations.",
      category: "main",
      react: "📡",
      filename: __filename
    },
    
    async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{
          const senderNumber = m.sender;
          const isGroup = m.isGroup || false;

          // Check access permissions
          if (!checkAccess(senderNumber, isGroup)) {
              if (blacklistedJIDs.includes(senderNumber)) {
                  return reply("*🚫 You are blacklisted. Access denied.*");
              } else {
                  return reply("*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*");
              }
          }

          // System and memory information
          const uptime = runtime(process.uptime());
          const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
          const totalMemory = Math.round(os.totalmem() / 1024 / 1024);
          const cpuArch = os.arch();
          const cpuCores = os.cpus().length;
          const systemType = os.type();
          const freeMemory = (os.freemem() / 1024 / 1024).toFixed(2);

          // Custom message for Render platform
          let platformMessage = '';
          if (platformName === 'Render') {
              platformMessage = '\n🌟 You are currently hosting on Render! Enjoy seamless deployments.';
          }

          // Status message to be sent


          let desc = `*👋 Hello ${pushname}*
          
📍𝖱𝖾𝗉𝗈 𝖫𝗂𝗇𝗄 ❤️‍🔥👇

👨‍💻◦ https://github.com/SahasTech22/SHADOW-MD

📍𝖯𝗅𝖾𝖺𝗌𝖾 𝖲𝗎𝖻𝗌𝖼𝗋𝗂𝖻𝖾 𝖬𝗒 𝖸𝗈𝗎𝗍𝗎𝖻𝖾 𝖢𝗁𝖺𝗇𝗇𝖾𝗅 👇

👨‍💻◦ https://www.youtube.com/@Sahas_Tech

📍𝖯𝗅𝖾𝖺𝗌𝖾 𝖥𝗈𝗅𝗅𝗈𝗐 𝖬𝗒 𝖶𝗁𝖺𝗍𝗌𝖺𝗉𝗉 𝖢𝗁𝖺𝗇𝗇𝖾𝗅 👇

👨‍💻◦ https://whatsapp.com/channel/0029VaiTjMlK5cDLek3bB533

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*`





          // Sending the image with caption
          const sentMsg = await conn.sendMessage(from, {


          text: desc,
          contextInfo: {

          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
          newsletterName: 'ＳＨＡＤＯＷ  |   ＭＤ 📌',
          newsletterJid: "120363296705464049@newsletter",
          },
          externalAdReply: {
              title: `SHADOW-MD Repo Informations`,
              body: `Can't Find The Information. You Can Try Another Way. Error Code 4043`,
              thumbnailUrl: `https://i.ibb.co/LP1dXT2/IMG-20241208-WA0281.jpg`,
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
              }
                  }
              }, { quoted: mek });

      } catch (e) {
          console.error(e);
          reply(`*Error:* ${e.message}`);
      }
    });


cmd({
      pattern: "about",
      desc: "To get the bot informations.",
      category: "main",
      react: "ℹ️",
      filename: __filename
    },
    
    async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{
          const senderNumber = m.sender;
          const isGroup = m.isGroup || false;

          // Check access permissions
          if (!checkAccess(senderNumber, isGroup)) {
              if (blacklistedJIDs.includes(senderNumber)) {
                  return reply("*🚫 You are blacklisted. Access denied.*");
              } else {
                  return reply("*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*");
              }
          }

          // System and memory information
          const uptime = runtime(process.uptime());
          const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
          const totalMemory = Math.round(os.totalmem() / 1024 / 1024);
          const cpuArch = os.arch();
          const cpuCores = os.cpus().length;
          const systemType = os.type();
          const freeMemory = (os.freemem() / 1024 / 1024).toFixed(2);

          // Custom message for Render platform
          let platformMessage = '';
          if (platformName === 'Render') {
              platformMessage = '\n🌟 You are currently hosting on Render! Enjoy seamless deployments.';
          }

          // Status message to be sent


          let desc = `👋 𝐇𝐄𝐋𝐋𝐎𝐖 𝐓𝐇𝐄𝐈𝐑 ${senderNumber}

𝐈 𝐀𝐌 𝐒𝐀𝐇𝐀𝐒-𝐌𝐃 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓

𝐂𝐑𝐄𝐀𝐓𝐄𝐃 𝐁𝐘 𝐒𝐀𝐇𝐀𝐒 𝐓𝐄𝐂𝐇 (𝐒𝐀𝐇𝐀𝐒 𝐍𝐄𝐓𝐇𝐒𝐀𝐑𝐀)..
           
ɢɪᴛʜᴜʙ :    
             
ʏᴏᴜᴛᴜʙᴇ : https://www.youtube.com/@Sahas_Tech
      
ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ : https://whatsapp.com/channel/0029VaiTjMlK5cDLek3bB533

тнαηкѕ ƒσя υѕιηg ʂαԋαʂ-м∂ ωнαтѕαρρ вσт м∂`





          // Sending the image with caption
          const sentMsg = await conn.sendMessage(from, {


          text: desc,
          contextInfo: {

          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
          newsletterName: 'ＳＨＡＤＯＷ  |   ＭＤ 📌',
          newsletterJid: "120363296705464049@newsletter",
          },
          externalAdReply: {
              title: `SHADOW-MD About`,
              body: `Can't Find The Information. You Can Try Another Way. Error Code 4043`,
              thumbnailUrl: `https://i.ibb.co/LP1dXT2/IMG-20241208-WA0281.jpg`,
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
              }
                  }
              }, { quoted: mek });

      } catch (e) {
          console.error(e);
          reply(`*Error:* ${e.message}`);
      }
    });


cmd({
      pattern: "system",
      alias: ["status", "botinfo"],
      desc: "Check uptime, RAM usage, CPU info, and more",
      category: "main",
      react: "🧬",
      filename: __filename
    }, async (conn, mek, m, { from, reply }) => {
      try {
          const senderNumber = m.sender;
          const isGroup = m.isGroup || false;

          // Check access permissions
          if (!checkAccess(senderNumber, isGroup)) {
              if (blacklistedJIDs.includes(senderNumber)) {
                  return reply("*🚫 You are blacklisted. Access denied.*");
              } else {
                  return reply("*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*");
              }
          }

          // System and memory information
          const uptime = runtime(process.uptime());
          const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
          const totalMemory = Math.round(os.totalmem() / 1024 / 1024);
          const cpuArch = os.arch();
          const cpuCores = os.cpus().length;
          const systemType = os.type();
          const freeMemory = (os.freemem() / 1024 / 1024).toFixed(2);

          // Custom message for Render platform
          let platformMessage = '';
          if (platformName === 'Render') {
              platformMessage = '\n🌟 You are currently hosting on Render! Enjoy seamless deployments.';
          }

          // Status message to be sent
        
          
          let desc = `*乂 SHADOW-MD SYSTEM INFORMATION*

*⏰𝖱𝗎𝗇𝗍𝗂𝗆𝖾:-  ${runtime(process.uptime())}*    
*📟𝖱𝖺𝗆 𝖴𝗌𝖺𝗀𝖾:- ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
*⚙️𝖯𝗅𝖺𝗍𝖿𝗈𝗋𝗆:- ${os.hostname()}*
*👨‍💻𝖮𝗐𝗇𝖾𝗋:- 𝖲𝖺𝗁𝖺𝗌 𝖭𝖾𝗍𝗁𝗌𝖺𝗋𝖺*   
*👾𝖵𝖾𝗋𝗌𝗂𝗈𝗇:- 1.0.0*
‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*`

       

          

          // Sending the image with caption
          const sentMsg = await conn.sendMessage(from, {


          text: desc,
          contextInfo: {

          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
          newsletterName: 'ＳＨＡＤＯＷ  |   ＭＤ 📌',
          newsletterJid: "120363296705464049@newsletter",
          },
          externalAdReply: {
              title: `SHADOW-MD System Information`,
              body: `Can't Find The Information. You Can Try Another Way. Error Code 4043`,
              thumbnailUrl: `https://i.ibb.co/LP1dXT2/IMG-20241208-WA0281.jpg`,
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
              }
                  }
              }, { quoted: mek });

      } catch (e) {
          console.error(e);
          reply(`*Error:* ${e.message}`);
      }
    });


cmd({
    pattern: "speed",
    desc: "Check bot's response time.",
    category: "main",
    react: "🪄",
    filename: __filename
}, async (conn, mek, m, { from, quoted, reply }) => {
    try {
         const senderNumber = m.sender;
        const isGroup = m.isGroup || false;

        // Check access permissions
        if (!checkAccess(senderNumber, isGroup)) {
            if (blacklistedJIDs.includes(senderNumber)) {
                return reply("*🚫 You are blacklisted. Access denied.*");
            } else {
                return reply("*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*");
            }
        }
        const startTime = Date.now();
        const message = await conn.sendMessage(from, { text: '```Pinging To index.js!!!```' });
        const endTime = Date.now();
        const ping = endTime - startTime;

        // Send the ping response without buttons
        await conn.sendMessage(from, { text: `*📍 speed : ${ping}ms*` }, { quoted: message })
    } catch (e) {
        console.error(e);
        reply(`${e}`);
  }
});

//menu cmd

cmd({
    pattern: "menu",
    alias: ["list"],
    desc: "menu the bot",
    react: "📜",
    category: "main"
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let desc = `*👋🏻 හායි ${pushname}, I AM DARK SHADOW MD WA BOT ♻️*

*Command Panel 💱*

*⏳ RAM USAGE -*${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
*⏰ UPTIME -* ${runtime(process.uptime())}
*🕹️ PREFIX -* ${config.PREFIX}

LIST OF MENU ❇️
*────────────────────────────────*
*| ➤ 1 || OWNER MENU*
*| ➤ 2 || CONVERT MENU*
*| ➤ 3 || AI MENU*
*| ➤ 4 || DOWNLOAD MENU*
*| ➤ 5 || GROUP MENU*
*| ➤ 6 || ANIME MENU*
*| ➤ 7 || FUN MENU*
*| ➤ 8 || NEWS MENU*
*| ➤ 9 || OTHER MENU*
*────────────────────────────────*

_🔢 Reply The Number That You Want_

> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ - ᴍᴅ`;

                 // Sending the image with caption
          const vv = await conn.sendMessage(from, {


          text: desc,
          contextInfo: {

          forwardingScore: 0,
          isForwarded: false,
          forwardedNewsletterMessageInfo: {
          newsletterName: 'ＳＨＡＤＯＷ  |   ＭＤ 📌',
          newsletterJid: "120363296705464049@newsletter",
          },
          externalAdReply: {
              title: `ＳＨＡＤＯＷ  |   ＭＤ 📌`,
              body: `🤖ᴘᴏᴡᴇʀᴅ ʙʏ ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ ᴛᴇᴀᴍ 🤖`,
              thumbnailUrl: `https://i.ibb.co/YpCX2Nr/Whats-App-Image-2024-12-11-at-13-45-45-0427a8ff.jpg`,
              imageUrl: `https://i.ibb.co/YpCX2Nr/Whats-App-Image-2024-12-11-at-13-45-45-0427a8ff.jpg`,
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
              }
              
                  }
              }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        reply(`
*＿＿＿＿＿＿＿＿＿＿[ Owner Menu 🧑🏻‍💻 ]＿＿＿＿＿＿＿＿＿＿＿*

| ➤ .restart
| ➤ .shutdown
| ➤ .broadcast
| ➤ .setpp
| ➤ .block
| ➤ .unblock
| ➤ .clearchats
| ➤ .jid
| ➤ .ss
*＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿*

> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ - ᴍᴅ*`);


 // Sending the image with caption
          const vv = await conn.sendMessage(from, {


          text: desc,
          contextInfo: {

          forwardingScore: 0,
          isForwarded: false,
          forwardedNewsletterMessageInfo: {
          newsletterName: 'ＳＨＡＤＯＷ  |   ＭＤ 📌',
          newsletterJid: "120363296705464049@newsletter",
          },
          externalAdReply: {
              title: `ＳＨＡＤＯＷ  |   ＭＤ 📌`,
              body: `🤖ᴘᴏᴡᴇʀᴅ ʙʏ ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ ᴛᴇᴀᴍ 🤖`,
              thumbnailUrl: `https://i.ibb.co/V9cRjgr/20241210-104055.jpg`,
      
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
              }
              
                  }
              }, { quoted: mek });
    
    
                        break;
                    case '2':               
                        reply(`╭────────────────❍❍➣
 🔄 *𝐂𝐨𝐧𝐯𝐞𝐫𝐭 𝐌𝐞𝐧𝐮*
┝───────❍❍❍❍❍
┝❍  .convert
┝❍ .sticker2
┝❍ .tts
┝❍ .qmake
┝❍ .readmore
┝❍ .sticker
┝❍ .vv
┝❍ .circle
┝❍ .crop
┝❍ .round
┝❍ .toaudio
┝❍ .toanime
┝❍ .currency
┝❍ .url
┝❍ .img2url
┝❍ .trt
╰────────────────❍❍➣

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*`);
                        break;
                    case '3':               
                        reply(`╭────────────────❍❍➣
 👾 *𝐀𝐢 𝐌𝐞𝐧𝐮*
┝───────❍❍❍❍❍
┝❍ .ai
┝❍ .bing
┝❍ .copilot
┝❍ .blackbox
┝❍ .bingimgai
┝❍ .gemini
┝❍ .gpt4
┝❍ .laland
┝❍ .obfus
┝❍ .prodia
┝❍ .prodia2
┝❍ .texttoimg1
┝❍ .texttoimg2
┝❍ .texttoimg3
┝❍ .aemtv1
┝❍ .aemtv2
┝❍ .aemtv3
┝❍ .aemtv4
┝❍ .aemtv5
┝❍ .aemtv6
┝❍ .aemtv7
╰────────────────❍❍➣

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*`);
                        break;
                    case '4':               
                        reply(`╭────────────────❍❍➣
 🔍 *𝐒𝐞𝐚𝐫𝐜𝐡 𝐌𝐞𝐧𝐮*
┝───────❍❍❍❍❍
┝❍ .lyric 
┝❍ .yts
┝❍ .srepo
┝❍ .weather1
┝❍ .horo
┝❍ .google
┝❍ .couplepp
┝❍ .snumber
┝❍ .weather
╰────────────────❍❍➣

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*`);
                        break;
                    case '5':               
                        reply(`╭────────────────❍❍➣
 📥 *𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐌𝐞𝐧𝐮*
┝───────❍❍❍❍❍
┝❍ .song2
┝❍ .video
┝❍ .fb
┝❍ .tt
┝❍ .gdrive
┝❍ .apkdl
┝❍ .twitter
┝❍ .apk
┝❍ .img
┝❍ .mfire
┝❍ .scloud
┝❍ .song
┝❍ .xnxx
┝❍ .xvideo
┝❍ .mega
┝❍ .gitclone
╰────────────────❍❍➣

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*`);
                        break;
                    case '6':               
                        reply(`╭────────────────❍❍➣
 🔧 *𝐌𝐚𝐢𝐧 𝐌𝐞𝐧𝐮*
┝───────❍❍❍❍❍
┝❍  .runtime
┝❍ .alive
┝❍ .allmenu
┝❍ .owner
┝❍ .support
┝❍ .repo
┝❍ .about
┝❍ .system
┝❍ .ping
┝❍ .allmenu
┝❍ .menu
╰────────────────❍❍➣

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*`);
                        break;
                    case '7':               
                        reply(`*♻️ DARK SHADOW - MD WA BOT ♻️*

*＿＿＿＿＿＿＿＿＿＿[ Group Menu ]＿＿＿＿＿＿＿＿＿＿＿*

| ➤ .mute
| ➤ .unmute
| ➤ .promote
| ➤ .demote
| ➤ .add
| ➤ .kick
| ➤ .setwelcome
| ➤ .setgoodbye
| ➤ .admins
| ➤ .groupdesc
| ➤ .groupinfo
| ➤ .grouplink
| ➤ .gname
| ➤ .setsubject
| ➤ .tagall
| ➤ .requests
| ➤ .accept
| ➤ .reject
| ➤ .hidetag
| ➤ .lock
| ➤ .unlock
| ➤ .approve
| ➤ .poll
| ➤ .getpic
*＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿*

> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ - ᴍᴅ*`);
                       break;
                    case '8':               
                        reply(`╭────────────────❍❍➣
 🎉 *𝐅𝐮𝐧 𝐌𝐞𝐧𝐮*
┝───────❍❍❍❍❍
┝❍ .animegirl
┝❍ .dog
┝❍ .fact
┝❍ .hack
┝❍ .insult
┝❍ .joke
┝❍ .quote
┝❍ .ronaldo
╰────────────────❍❍➣

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*`);

                        break;
                    case '9':               
                        reply(`╭────────────────❍❍➣
 🎬 *𝐌𝐨𝐯𝐢𝐞 𝐌𝐞𝐧𝐮*
┝───────❍❍❍❍❍
┝❍ .uploadme
┝❍ .uploadmovie
┝❍ .moviekv
┝❍ .uploadtv
┝❍ .uploadtvm
┝❍ .uploadmoviem
┝❍ .uploadzip
┝❍ .uploadzipn
┝❍ .uploadzipfile
┝❍ .movie
┝❍ .gdmovie
╰────────────────❍❍➣

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*`);

                    break;
                    case '10':               
                        reply(`╭────────────────❍❍➣
 ⚙️ *𝐎𝐭𝐡𝐞𝐫 𝐌𝐞𝐧𝐮*
┝───────❍❍❍❍❍
┝❍ .anime1
┝❍ .anime2
┝❍ .anime3
┝❍ .anime4
┝❍ .anime5
┝❍ .loli
┝❍ .waifu
┝❍ .neko
┝❍ .megumin
┝❍ .maid
┝❍ .awoo
┝❍ .define
┝❍ .githubstalk
┝❍ .gpass
┝❍ .wiki
┝❍ .ss
╰────────────────❍❍➣

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*`);

                    break;
                    case '11':               
                        reply(`*♻️ DARK SHADOW - MD WA BOT ♻️*

*＿＿＿＿＿＿＿＿＿＿[ News Menu ]＿＿＿＿＿＿＿＿＿＿＿*

| ➤ .hirunews
| ➤ .derananews
| ➤ .lankadeepa
| ➤ .siyathanews
| ➤ .itnnews
| ➤ .sirasanews
| ➤ .nethnews
*＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿*

> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ - ᴍᴅ*`);

                    break;
                    case '12':               
                        reply(`╭────────────────❍❍➣
 🛠️ *𝐓𝐨𝐨𝐥𝐬 𝐌𝐞𝐧𝐮*
┝───────❍❍❍❍❍
┝❍ .bass
┝❍ .blown
┝❍ .deep
┝❍ .fast
┝❍ .reverse2
┝❍ .calc
┝❍ .translate
┝❍ .reverse
┝❍ .tempmail
┝❍ .checkmail
┝❍ .delmail
┝❍ .encode
┝❍ .decode
┝❍ .npmstalk
┝❍ .iplookup
┝❍ .instastalk
┝❍ .githubuser
┝❍ .password
┝❍ .hijact
┝❍ .antispam
╰────────────────❍❍➣

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*`);

                    
                        break;
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
