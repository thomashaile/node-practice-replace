const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const replace = require('./logic');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/docs', (req, res) => {
  const welcomeAndRoutes = {
    message: 'Welcome to The Replacer.  These are our routes',
    routes: app._router.stack
      .filter(r => r.route && r.route.path)
      .map(r => Object.keys(r.route.methods)
        .map(method => method.toUpperCase() + ': ' + r.route.path)
      )
  };
  res.json(welcomeAndRoutes);
});


app.get('/files', async (req, res) => {
  const fileNames = fs.readdirSync(__dirname + '/files');
  res.json({ files: fileNames });
});

app.post('/files/add/:name', async (req, res) => {
  const fileName = req.params.name + '.txt';
  const fileContents = req.body.text;
  fs.writeFileSync(__dirname + '/files/' + fileName, fileContents)
  res.redirect('/files');
});

app.put('/files/replace/:oldFile/:newFile', async (req, res) => {
  console.log(req.body)
  const oldFile = req.params.oldFile + '.txt';
  const newFile = req.params.newFile + '.txt';
  const toReplace = req.body.toReplace;
  const withThis = req.body.withThis;
  const oldText = fs.readFileSync(__dirname + '/files/' + oldFile, 'utf-8');
  const newText = replace(oldText, toReplace, withThis);
  fs.writeFileSync(__dirname + '/files/' + newFile, newText)
  res.redirect('/files');
});

app.get('/report', async (req, res) => {
  res.send(require('./test/report.json'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Replacer is serving at http://localhost:${port}`));
