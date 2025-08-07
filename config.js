const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || "null"
global.allowJids= process.env.ALLOW_JID || "" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URI = process.env.DATABASE_URL || "null"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Itxxwasi/WASI-TECH-BOT-V1";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/733b2d3b5f1d1e1aeec0f.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923192173398" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923314110070";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOMEWELCOM || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923192173398,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923192173398";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "ＧＥＮＥＲＴＥＤ ＢＹ ＷＡＳＩ 🇵🇰",
 
  author : process.env.PACK_AUTHER|| "ＩＴＸ",
  packname: process.env.PACK_NAME || "ＷＡＳＩ♥️",
  botname : process.env.BOT_NAME  || "⸙ 𓆩ÐⱤ ⤹𝐀βʋ ʑꪖⱤ𓆪",
  ownername:process.env.OWNER_NAME|| "⸙ 𓆩ÐⱤ ⤹𝐀βʋ ʑꪖⱤ𓆪",

  sessionName:process.env.SESSION_ID || "SUHAIL_04_19_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAzMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTkxLFxuICAgICAgICA4NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQwLFxuICAgICAgICA0MixcbiAgICAgICAgOTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTExLFxuICAgICAgICA5NixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjAzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDYzLFxuICAgICAgICA5MixcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE3LFxuICAgICAgICA2MixcbiAgICAgICAgMTksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTc3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODksXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDM5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTA0LFxuICAgICAgICA4NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDc1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAzNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDksXG4gICAgICAgIDcyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5LFxuICAgICAgICA0NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTksXG4gICAgICAgIDY0LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDMyLFxuICAgICAgICA5MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzksXG4gICAgICAgIDg1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyLFxuICAgICAgICA0NCxcbiAgICAgICAgODcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjU1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjAsXG4gICAgICAgIDE5MixcbiAgICAgICAgNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQyLFxuICAgICAgICA4LFxuICAgICAgICA3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTksXG4gICAgICAgIDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDcyLFxuICAgICAgICAyMixcbiAgICAgICAgMTk4LFxuICAgICAgICA2NixcbiAgICAgICAgMTczLFxuICAgICAgICA4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTEyLFxuICAgICAgICA2NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc5LFxuICAgICAgICA3MixcbiAgICAgICAgMTMwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJnZ1ljNDljZzZIVW45a2doQ0ZxM3RObmVNZ1BzTU1ZZVF5NGc2QW9wMW0wPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJFT1gxOEVaTFFoSzlaVk1UWi1BQkhRXCIsXG4gIFwicGhvbmVJZFwiOiBcImEzNTIyZDJlLWFkNjUtNDg2My04NDQ0LTBlNWJlOGExZjdiNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMyxcbiAgICAgIDE2NyxcbiAgICAgIDE0MixcbiAgICAgIDI1NSxcbiAgICAgIDU3LFxuICAgICAgODYsXG4gICAgICAxMDYsXG4gICAgICAxMTUsXG4gICAgICAyMDEsXG4gICAgICAxMDcsXG4gICAgICAxNzMsXG4gICAgICAyMTEsXG4gICAgICAyNDIsXG4gICAgICA0OSxcbiAgICAgIDY0LFxuICAgICAgMTQ2LFxuICAgICAgMSxcbiAgICAgIDIxMyxcbiAgICAgIDIxNixcbiAgICAgIDIxNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI2LFxuICAgICAgMTYyLFxuICAgICAgMjExLFxuICAgICAgMjI3LFxuICAgICAgMjIyLFxuICAgICAgOTksXG4gICAgICA2NCxcbiAgICAgIDEzMyxcbiAgICAgIDE0NSxcbiAgICAgIDE0NixcbiAgICAgIDE3NixcbiAgICAgIDE1OSxcbiAgICAgIDQyLFxuICAgICAgNDEsXG4gICAgICAyMzYsXG4gICAgICAyMzUsXG4gICAgICAxNzIsXG4gICAgICA2NCxcbiAgICAgIDMxLFxuICAgICAgMzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKaWVvYWtFRU5yUzBNUUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlpCNnRxYWw0SWdKak1jeUo2K2lYNGVOclRxQWJQUHVkWndkN3MwODZFRXM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSTQwdlVaYXFqYjEwTmhRc0xmRUs4c2ZiU2wxMHdPbVlmc0xMMnRYY28zWTJQTlUzdGFtejR3SzRYQ3A3ZHgwNFQrbDRHWmlnVjRtYnp3MjBNZlp3QUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNkYrY1BDN1NtNTZPRDg2S3FzZHJvbTVrcTBVai9vRExYaXpOTkRCR1B2Y2VpcHhrSmJuQlQ5YlZXTDZkckhTTTk5SThRR0hHRDhVM1I3eUVxa3ZPaFE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzMTQxMTAwNzA6OTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLiuJkg8JOGqcOQ4rGkIOKkufCdkIDOssqLIMqR6qqW4rGk8JOGqlwiLFxuICAgIFwibGlkXCI6IFwiMTQ4MDE4MDQ1MTYxNzE0Ojk3QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzE0MTEwMDcwOjk3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzU0NTQwMzgyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTmVWXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOZVYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI1MW91cGVJRmNBSndvY2F6VWNpemhGYkJiK2t3Vm5XMzRYQnl1VTNSRDRNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExNjAyNjk1OTIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc1NDUzOTQyMzQyOVwifSIKfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "RybcWhfzZJ7Wd46dgGE21kLt",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "25",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "5c804a3fc8fb6ca21eeaecacf9935870",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
