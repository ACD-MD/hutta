const { cmd, commands } = require('../command');
const config = require('../config');
const os = require('os');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, fetchJson , runtime ,sleep } = require('../lib/functions')

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
              body: `🤖 ᴍᴀᴅᴇ ʙʏ ᴅᴀʀᴋ ᴀʀᴏᴏᴡ ᴛᴇᴀᴍ  🤖`,
              thumbnailUrl: `https://i.ibb.co/YpCX2Nr/Whats-App-Image-2024-12-11-at-13-45-45-0427a8ff.jpg`,
              sourceUrl: `https://whatsapp.com/channel/0029Vay0BqOCXC3EwTtXuF2F`,
              
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
                        reply(`*＿＿＿＿＿＿＿＿＿＿[ Owner Menu 🧑🏻‍💻 ]＿＿＿＿＿＿＿＿＿＿＿*

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
                        reply(`*＿＿＿＿＿＿＿＿＿＿[ Group Menu ☃️ ]＿＿＿＿＿＿＿＿＿＿＿*

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
                        reply(`*＿＿＿＿＿＿＿＿＿＿[ Anime Menu 🧚🏻‍♀️ ]＿＿＿＿＿＿＿＿＿＿＿*

| ➤ .animegirl
| ➤ .loli
| ➤ .waifu
| ➤ .neko
| ➤ .megumin
| ➤ .maid
| ➤ .awoo
*＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿*

*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ - ᴍᴅ*`)
                    break;
                    case '9':               
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
                    case '10':               
                        reply(`*＿＿＿＿＿＿＿＿＿＿[ News Menu 📃 ]＿＿＿＿＿＿＿＿＿＿＿*

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
                        reply(`*＿＿＿＿＿＿＿＿＿＿[ Bug Menu 👾 ]＿＿＿＿＿＿＿＿＿＿＿*

| ➤ .bug1
| ➤ .bug2
*＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿*

> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ - ᴍᴅ*`);

                    
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
