const fs = require("fs");
const promises = fs.promises

const {
  join
} = require("path");

const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = str =>
  str
    .split("")
    .reverse()
    .join("");

async function callBackHell() {
  try {
  
    let files = await promises.readdir(inbox)
    console.log(files)
  for (let file of files) { 
    let readFiles = await promises.readFile(join(inbox, file), "utf8");
    console.log(readFiles)
    await promises.writeFile(join(outbox, file), reverseText(readFiles));
    console.log(`${readFiles} written`)
  }} catch (err){
    console.log(err)
  }

}

callBackHell()

