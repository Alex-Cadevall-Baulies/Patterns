const {
  readdir,
  readFile,
  writeFile
} = require("fs");
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


const llegirDirectori = (readdir, inbox) => {
      return new Promise((resolve, reject) => {
        readdir(inbox, (error, data)=> {
        if (error) reject(console.log("Error: Folder inaccessible"))
        else {
          console.log("Arxius llegits")
          resolve(files)
        }
      })
    })
  };

llegirDirectori(readdir, inbox)
  .then(files => {return files})
  .then(files => {
    files.forEach(file => {
      readFile(join(inbox, file), "utf8", (error, data) => {
        if (error) return console.log("Error: File error")
      })
    })
  })
  .then(files => {
    files.forEach(file => {
      writeFile(join(outbox, file), reverseText(data), error => {
        if (error) return console.log("Error: File could not be saved!");
        console.log(`${file} was successfully saved in the outbox!`);
      })
    })
  })
  .catch(err => console.log(err))

