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
    message: 'Welcome to The Replacer.  These are the routes',
    routes: app._router.stack
      .filter(r => r.route && r.route.path)
      .map(r => Object.keys(r.route.methods)
        .map(method => method.toUpperCase() + ': ' + r.route.path)
      )
  };
  res.json(welcomeAndRoutes);
});

// GET: '/files'
// response: {status: 'ok', files: ['all.txt','file.txt','names.txt']}

// POST: '/files/add/:name'
//  body: {text: "file contents"}
//  write a new files into ./files with the given name and contents
// redirect -> GET: '/files'

// PUT: '/files/replace/:oldFile/:newFile'
//  body: {toReplace: "str to replace", withThis: "replacement string"}
//  write a new files into ./files with the given name and contents
//  note - params should not include .txt, you should add that in the route
// failure: {status: '404', message: `no file named ${oldFile}`  }
// success: redirect -> GET: '/files'

// GET: '/report'
//  reads the contents from ./test/report.json and sends it
// response: {status: 'ok', report }


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Replacer is serving at http://localhost:${port}`));
