const fs = require("fs");
const express = require("express");
const path = require("path");
const replace = require("./logic/index.js");

const Helper = `
COMMANDS:
  list
    print all files to the console
  command line:
    node cli.js <File name> <String-to-replace> <new-string> <new file-name>
      
FLAGS:
  -h
    print this helpful message
  
`;
const list = fs.readdirSync(path.join(__dirname, "files"));
if (process.argv.includes("-h")) {
    console.log(Helper);
    process.exit(0);
}

if (process.argv.includes("list")) {
    console.log(list);
}

const filename = process.argv[2];
const stringToReplace = process.argv[3];
const newString = process.argv[4];
const newFile = process.argv[5];

if (!filename || !stringToReplace || !newString || !newFile) {
    console.log(
        `your command should look like: node cli.js <File name> <String-to-replace> <new-string> <new file-name>`
    );
} else if (!list.includes(filename)) {
    console.log(`unknown file name.. could not find file with the name.`);
} else {
    const FILE_PATH = path.join(__dirname, "files", filename);
    const newFilePath = path.join(__dirname, "files", newFile);
    const fileToRead = fs.readFileSync(`${FILE_PATH}`, "utf-8");
    const replacedContent = replace(fileToRead, stringToReplace, newString);
    fs.writeFileSync(newFilePath, replacedContent);
    console.log(newFile + `...created`);
}
/* write a CLI interface for the "replace" function and your files

  command line arguments:
    1: the file you want to read from
    2: the old string to replace
    3: the new string to replace it with
    4: the file you want to write to

  examples:
  $ node cli.js the-book-of-sand.txt the any sand-the-any.txt
  $ node cli.js the-library-of-babel.txt f g library-f-g.txt

  behavior:
  : parse command line arguments from process.argv
    (let the user know if they are missing any arguments!)
  : read from the selected file in the './files' directory
  : use your logic function to create the new text
  : write to the new file
  : console.log a nice message letting the user know what happened

  little challenges:
  : -help
    if a user passes in "-help" as any command line argument,
    log a little description of how the CLI works
  : -list
    if a user passes in "-list" as any command line argument,
    log a list of all the file names in "./files"

*/