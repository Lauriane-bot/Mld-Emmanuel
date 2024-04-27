const axios = require('axios');

const Prefixes = [
  'Megan', 
  'ai'
];

module.exports = {
  config: {
    name: "ask",
    version: 1.0,
    author: "Naruto",
    longDescription: "AI", 
    category: "ai",
    guide: {
      en: "{p} questions",
    },
  },
  onStart: async function () {},
  onChat: async function ({ api, event, args, message }) {
    try {
      
      const prefix = Prefixes.find((p) => event.body && event.body.toLowerCase().startsWith(p));
      if (!prefix) {
        return; // Invalid prefix, ignore the command
      }
      const prompt = event.body.substring(prefix.length).trim();
   if (!prompt) {
        await message.reply(" 𝗔𝗡𝗢𝗧𝗛𝗘𝗥-𝗠𝗘| 🧋✨/n━━━━━━━━━━━━━━━/nHey! 𝗣𝗼𝘀𝗲𝗿 𝘃𝗼𝘁𝗿𝗲 𝗾𝘂𝗲𝘀𝘁𝗶𝗼𝗻!/n━━━━━━━━━━━━━━━")
        return;
      }


      const response = await axios.get(`https://sandipbaruwal.onrender.com/gpt?prompt=${encodeURIComponent(prompt)}`);
      const answer = response.data.answer;

 
    await message.reply({ body: `𝗔𝗡𝗢𝗧𝗛𝗘𝗥-𝗠𝗘| 🧋✨


${answer}


▢▢▢✞྿..𝗛𝗔𝗜𝗧𝗔𝗡𝗜..྿✞▢▢▢`,
});

   } catch (error) {
      console.error("Error:", error.message);
    }uw
  }
      }
