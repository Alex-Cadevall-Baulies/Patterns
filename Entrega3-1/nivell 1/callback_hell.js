const fs = require("fs");

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


    fs.promises.readdir(inbox)
    .then(files => {
      for (let file of files) {
          fs.promises.readFile(join(inbox, file), "utf8")
          .then(data => fs.promises.writeFile(join(outbox, file), reverseText(data)), 
          error => console.log("Error: File error"))
          .then(files => console.log(`${file} was successfully saved in the outbox!`), 
          error => console.log("Error: Folder outbox inaccessible"))
      }
    }, 
    error => console.log("Error: Folder inbox inaccessible"))
