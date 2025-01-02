const { cmd, commands } = require('../command');
const config = require('../config');
const os = require('os');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, fetchJson , runtime ,sleep } = require('../lib/functions')
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
          ///////status been sent//////
        
let desc =`*👋🏻 හායි ${pushname}, I AM DARK SHADOW - MD WA BOT 🧬*

_ABOUT ME_ ⚙️

*⏳ RAM USAGE -* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
*⏰ UPTIME -* ${runtime(process.uptime())}

*ACD MD Version 2.0.0*

This is a whatsapp bot that helps us to download our needed things. such as videos , songs , documents , apks etc. Dark Shadow MD is the upgrade version of ACD MD whatsapp bot ( Version 2.0.0 ) . Special Thanks to owners Crazy Chutta / Crazy Dina / Loku ash And Drk Vala 🌟

☘️ HAVE A NICE DAY ☘️

🎯 MORE DETAILS 

| ➤ .repo
| ➤ .menu
| ➤ .ping
| ➤ .system

> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ - ᴍᴅ*`
 // Sending the image with caption
          const sentMsg = await conn.sendMessage(from, {


          text: desc,
          contextInfo: {

          forwardingScore: 999,
          isForwarded: false,
          forwardedNewsletterMessageInfo: {
          newsletterName: '  |    ',
          newsletterJid: "120363296605464049@newsletter",
          },
          externalAdReply: {
              title: `මම ඉන්නවා හුත්තො 🤖`,
              body: `🤖 ᴘᴏᴡᴇʀᴅ ʙʏ ᴅᴀʀᴋ ᴀʀʀᴏᴡ ᴛᴇᴀᴍ 🤖`,
              thumbnailUrl: `https://i.ibb.co/LP1dXT2/IMG-20241208-WA0281.jpg`,
              sourceUrl: `https://whatsapp.com/channel/0029Vay0BqOCXC3EwTtXuF2F`,
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

          
          
              
