const fs = require('fs');

module.exports = {
  name: __dirname.split('/').pop(),
  args: [
    fs.readFileSync(__dirname + '/input.txt', 'utf-8'),
    " ",
    "\n"
  ],
  expected: fs.readFileSync(__dirname + '/expected.txt', 'utf-8')
};
