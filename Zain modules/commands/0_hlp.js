module.exports.config = {
  name: "samosa",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
  description: "Random samosa image",
  commandCategory: "Image",
  usages: "hlp",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};

module.exports.run = async ({ api, event, args, Users, Threads, Currencies }) => {
  const axios = global.nodemodule["axios"];
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
  
  var link = [
"https://i.postimg.cc/9f8tF47p/Pink-Minimalist-Fauget-Salon-Price-List-20241218-093759-0000.png"
  
];

  // Randomly select an image link and download it
  var callback = () => api.sendMessage(
    { body: "", attachment: fs.createReadStream(__dirname + "/cache/1.jpg") },
    event.threadID,
    () => fs.unlinkSync(__dirname + "/cache/1.jpg"),
    event.messageID
  );

  return request(encodeURI(link[Math.floor(Math.random() * link.length)]))
    .pipe(fs.createWriteStream(__dirname + "/cache/1.jpg"))
    .on("close", () => callback());
};
