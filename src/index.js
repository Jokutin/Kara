require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.GuildMessageReactions,
        IntentsBitField.Flags.DirectMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log(`✅ ${c.user.tag} is online`);
})


// Set the keywords to search for
const keywordAskIP1 = 'mikä';
const keywordAskIP2 = 'ip';
// Set the response message to send when both keywords are found
const responseAskIP = '`mc.karanteeni.net`';

// Listen for the 'message' event
client.on('messageCreate', (message) => {
    // Check if the message is send by bot
    if(message.author.bot) {
        return;
    }
    // Check if the message contains both keywords
    if (message.content.toLowerCase().includes(keywordAskIP1) && message.content.toLowerCase(keywordAskIP2)) {
    // Send the response message
    message.reply(responseAskIP);
    }
});


// Set the keywords to search for on 
const keywordAskRank1 = 'saa';
const keywordAskRank2 = 'rankin';
// Set the response message to send when both keywords are found
const responseAskRank = 'Karanteenissa on kahdeksan peliaikaan perustuvaa rankkia, jotka tuovat lisäominaisuuksia ajan kuluessa. \nRankki nousee automaattisesti, kun vaadittu peliaika on saavutettu. Peliaika ei keräänny afkatessa. Peliajan näkee komennolla `/peliaika`, ja toisten pelaajien peliajan näkee komennolla `/peliaika pelaajan_nimi`. \n \nKarantteenin Discord palvelimella voit saada rankin yhdistämällä käyttäjäsi discordiin. Apua saat <#995388049464758422> kanavalta.';

// Listen for the 'message' event
client.on('messageCreate', (message) => {
    // Check if the message is send by bot
    if(message.author.bot) {
        return;
    }
    // Check if the message contains both keywords
    if (message.content.toLowerCase().includes(keywordAskRank1) && message.content.toLowerCase().includes(keywordAskRank2)) {
    // Send the response message
    message.reply(responseAskRank)
    }
});


// Set the keywords to search for on
const keywordAskUnban1 = 'antakaa';
const keywordAskUnban2 = 'unbannit';
const keywordAskUnban3 = 'unban';
// Set the response message to send when both keywords are found
const responseAskUnban = 'Voit hakea Unbanneja discordiin tai Karanteenin serverille karanteenin nettisivulta: *https://www.karanteeni.net/unban* ';

// Listen for the 'message' event
client.on('messageCreate', (message) => {
    // Check if the message is sent by bot or does not contain any of the keywords
    if(message.author.bot) {
        return;
    }
    // Check if the message contains both keywords
    if (message.content.toLowerCase().includes(keywordAskUnban1) && (message.content.toLowerCase().includes(keywordAskUnban2) || message.content.toLowerCase().includes(keywordAskUnban3))) {
    // Send the response message
    message.reply(responseAskUnban);
    }
});


// Set the keywords to search for on 
const keywordAskClaim1 = 'voiko';
const keywordAskClaim2 = 'claim';
const keywordAskClaim3 = 'suoja';
// Set the response message to send when both keywords are found
const responseAskClaim = 'Voit pyytää ylläpitäjää suojaamaan rakennuksesi <#694174799622307961> kanavalla';

// Listen for the 'message' event
client.on('messageCreate', (message) => {
    // Check if the message is send by bot
    if(message.author.bot) {
        return;
    }
    // Check if the message contains keywords
    if (message.content.toLowerCase().includes(keywordAskClaim1) && (message.content.toLowerCase().includes(keywordAskClaim2) || message.content.toLowerCase().includes(keywordAskClaim3))) {
    // Send the response message
    message.reply(responseAskClaim);
    }

});


// Set the keywords to search for on 
const keywordAskHowToPlay1 = 'pelata';
const keywordAskHowToPlay2 = 'hirsibuuta';
const keywordAskHowToPlay21 = 'hirsibuu';
const keywordAskHowToPlay22 = 'hirsipuu';
const keywordaskhowtoplay23 = 'hirsipuuta';
const keywordAskHowToPlay3 = 'laskuria';
const keywordAskHowToPlay31 = 'laskuri';
const keywordAskHowToPlay4 = 'pelaamaan';
// Set the response message to send when both keywords are found
const responseAskHowToPlay = 'Voit pelata Hirsibuuta tai Laskuria Parantuvasta eteenpäin';

// Listen for the 'message' event
client.on('messageCreate', (message) => {
    // Check if the message is send by bot
    if(message.author.bot) {
        return;
    }
    // Check if the message contains keywords
    if (message.content.toLowerCase().includes(keywordAskHowToPlay1) || message.content.toLowerCase().includes(keywordAskHowToPlay4) && (message.content.toLowerCase().includes(keywordAskHowToPlay22) || message.content.toLowerCase().includes(keywordaskhowtoplay23) || message.content.toLowerCase().includes(keywordAskHowToPlay2) || message.content.toLowerCase().includes(keywordAskHowToPlay3) || message.content.toLowerCase().includes(keywordAskHowToPlay21) || message.content.toLowerCase().includes(keywordAskHowToPlay31))) {
    // Send the response message
    message.reply(responseAskHowToPlay);
    }

});


// Set the keywords to search for on 
const keywordAskBdwand1 = 'toimii';
const keywordAskBdwand2 = 'rakennussauva';
const keywordAskBdwand3 = 'builders wand';
// Set the response message to send when both keywords are found
const responseAskBdwand = 'Rakennussauvvaa voi käyttää sisukkaasta ylöspäin.\nRakennussauvan eri toimintoja ovat:\n**wand of extend**\n    Jatkaa valmista muotoa taso kerrallaan.\n**wand of levitation**\n    Mahdollistaa palikoiden asettamisen ilmaan.\n**wand of tower**\n    Rakentaa viisi blockia korkean 1x1 tornin.\n**wand of nothigness**\n    Rakennussauva on pois käytöstä joten voit rakentaa normaalisti.';

// Listen for the 'message' event
client.on('messageCreate', (message) => {
    // Check if the message is send by bot
    if(message.author.bot) {
        return;
    }
    // Check if the message contains keywords
    if (message.content.toLowerCase().includes(keywordAskBdwand1) && (message.content.toLowerCase().includes(keywordAskBdwand2) || message.content.toLowerCase().includes(keywordAskBdwand3))) {
    // Send the response message
    message.reply(responseAskBdwand);
    }

});


// Set the keywords to search for
const keywordAskHelp1 = 'auttaa';
const keywordAskHelp2 = 'yp';
// Set the response message to send when both keywords are found
const responseAskHelp = 'Voit pyytää apua karantteeniin ylläpidolta <#995388049464758422> ticketin avulla';

// Listen for the 'message' event
client.on('messageCreate', (message) => {
    // Check if the message is send by bot
    if(message.author.bot) {
        return;
    }
    // Check if the message contains both keywords
    if (message.content.toLowerCase().includes(keywordAskHelp1) && message.content.toLowerCase().includes(keywordAskHelp2)) {
    // Send the response message
    message.reply(responseAskHelp);
    }
});


// Set the keywords to search for on 
const keywordAskMSG1 = 'en';
const keywordAskMSG2 = 'lähettää';
const keywordAskMSG3 = 'viestejä';
// Set the response message to send when both keywords are found
const responseAskMSG = 'Et voi lähettää tietyille kanaville viestejä jos et ole yhdistänyt discord tiliäsi Karantteenin serveriin\nApua yhdistämiseen saat <#694174799622307961>.\nOtathan Karantteenin ylläpitoon yhteyttä jos jokin ominaisuus ei toimi.';

// Listen for the 'message' event
client.on('messageCreate', (message) => {
    // Check if the message is send by bot
    if(message.author.bot) {
        return;
    }
    // Check if the message contains keywords
    if (message.content.toLowerCase().includes(keywordAskMSG1) && (message.content.toLowerCase().includes(keywordAskMSG2) || message.content.toLowerCase().includes(keywordAskMSG3))) {
    // Send the response message
    message.reply(responseAskMSG);
    }

});


// Set the keywords to search for on 
const keywordAskMapres1 = 'maprese';
const keywordAskMapres2 = 'koska';
const keywordAskMapres3 = 'millo';
// Set the response message to send when both keywords are found
const responseAskMapres = 'Karanteenin kartat vaihtuvat noin 6kk välein. Ilmoitamme mapreseteistä yleensä muutamaa viikkoa ennen sen tapahtumista, joten pidä katse <#244164511815172116> kanavalla';

// Listen for the 'message' event
client.on('messageCreate', (message) => {
    // Check if the message is send by bot
    if(message.author.bot) {
        return;
    }
    // Check if the message contains keywords
    if (message.content.toLowerCase().includes(keywordAskMapres1) && (message.content.toLowerCase().includes(keywordAskMapres2) || message.content.toLowerCase().includes(keywordAskMapres3))) {
    // Send the response message
    message.reply(responseAskMapres);
    }

});


client.on('messageCreate', (message) => {
    // Check if the message is send by bot
    if(message.author.bot) {
        return;
    }
    // Check message
    if (message.content.toLowerCase() === ('kiitti kara')) {
    // Send the response message
    message.reply('Ole hyvä');
    }

});


client.on('messageCreate', (message) => {
    // Check if the message is send by bot
    if(message.author.bot) {
        return;
    }
    // Check message
    if (message.content.toLowerCase() === ('mikä on elämän tarkoitus')) {
    // Send the response message
    message.reply('42');
    }

});

// Set the keywords to search for on
const keywordAskCrea1 = 'miten';
const keywordAskCrea2 = 'claima';
const keywordAskCrea3 = 'suoja';
const keywordAskCrea4 = 'vallata';
const keywordAskCrea5 = 'crea';
const keywordAskCrea6 = 'creative';
const keywordAskCrea7 = 'plot';
const keywordAskCrea8 = 'alue';
// Set the response message to send when both keywords are found
const responseAskCrea = 'Lisää plotteja saa rankkien myötä. Rankkien plotmäärät ovat:\n**Eloton:** 1\n**Raihnas:** 2\n**Sisukas:** 2\n**Parantuva:** 4\n**Immuuni:** 6\n**Parantaja:** 8\n**Nekromaatikko:** 9\n**Kuolematon:** 12\n\nVoit vallata itsellesi alueita komennolla `/plot auto` tai seistäessäsi plotilla komennolla `/plot claim`\n*Mukavia rakennushetkiä!*'

// Listen for the 'message' event
client.on('messageCreate', (message) => {
    // Check if the message is send by bot
    if(message.author.bot) {
        return;
    }
    // Check if the message contains keywordAskUnban1 or keywordAskUnban2
    if (message.content.toLowerCase().includes(keywordAskCrea1) && (message.content.toLowerCase().includes(keywordAskCrea2) || message.content.toLowerCase().includes(keywordAskCrea3) || message.content.toLowerCase().includes(keywordAskCrea4)) && (message.content.toLowerCase().includes(keywordAskCrea5) || message.content.toLowerCase().includes(keywordAskCrea6)) && (message.content.toLowerCase().includes(keywordAskCrea7) || message.content.toLowerCase().includes(keywordAskCrea8))) {
    // Send the response message
    message.reply(responseAskCrea);
    }

});


client.login(process.env.TOKEN);
