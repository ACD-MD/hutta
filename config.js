const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID ||
"6ZVjXDoa#DTKoAEU2xeUbjOMKDL2W9v0nwvdV99E5pxRpp-V8iTk",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/LP1dXT2/IMG-20241208-WA0281.jpg",
ALIVE_MSG:process.env.ALIVE_MSG || "*👋🏻 ʜᴇʟʟᴏᴡ ${pushname}, ɪ ᴀᴍ ᴀʟɪᴠᴇ ɴᴏᴡ* 📍",
};