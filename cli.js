const replace = require('./logic/index.js');
const fs = require('fs');

const args = {
  oldPath: 'files/' + process.argv[2],
  oldWord: process.argv[3],
  newWord: process.argv[4],
  newPath: 'files/' + process.argv[5],
}

const oldText = fs.readFileSync(args.oldPath, 'utf-8');
const newText = replace(oldText);
fs.writeFileSync(args.newPath, newText);

console.log('changes were saved to ./' + args.newPath);
