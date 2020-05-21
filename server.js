const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const util = require("util");
const replace = require('./logic');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const FILES_DIR = path.join(__dirname, "files");

const readDir = util.promisify(fs.readdir);
const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);
const unlinkFile = util.promisify(fs.unlink);


// GET: '/files'
// response: {status: 'ok', files: ['all.txt','file.txt','names.txt']}
app.get("/files", async(req, res) => {
    const list = await readDir(`${FILES_DIR}`);
    res.json({ status: "Ok", files: list });
});
// POST: '/files/add/:name'
//  body: {text: "file contents"}
//  write a new files into ./files with the given name and contents
// redirect -> GET: '/files'
app.post("/files/add/:name", async(req, res) => {
        const fileName = req.params.name;
        const content = req.body.text;
        try {
            const newText = await writeFile(`${FILES_DIR}/${fileName}`, content);
            return res.redirect(303, "/files");
        } catch (err) {
            return res.json({ 'error': err });
        }
    }),

    // PUT: '/files/replace/:oldFile/:newFile'
    //  body: {toReplace: "str to replace", withThis: "replacement string"}
    //  route logic:
    //    read the old file
    //    use the replace function to create the new text
    //    write the new text to the new file name
    //  note - params should not include .txt, you should add that in the route logic
    // failure: {status: '404', message: `no file named ${oldFile}`  }
    // success: redirect -> GET: '/files'
    app.put("/files/replace/:oldFile/:newFile", async(req, res) => {
        const fileText = {
            toReplace: req.body.toReplace,
            withThis: req.body.withThis
        };
        try {
            const oldContent = await readFile(`${FILES_DIR}/${req.params.oldFile}.txt`, "utf-8");
            const replacedContent = await replace(
                oldContent,
                fileText.toReplace,
                fileText.withThis
            );
            await writeFile(
                `${FILES_DIR}/${req.params.newFile}.txt`,
                replacedContent
            );
            return res.redirect(303, "/files");;
        } catch (err) {
            //console.log(oldFileName);
            return res.json({ status: '404', message: `no file named ${req.params.oldFile}` });
        }
    }),

    // GET: '/report'
    //  reads the contents from ./test/report.json and sends it
    // response: {status: 'ok', report }
    app.get("/report", async(req, res) => {
        const filePath = path.join(__dirname, 'test', 'report.json');
        const reportFile = await readFile(filePath, "utf-8");
        return res.json({ status: "Ok", reportFile });
    });

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).end();
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Replacer is serving at http://localhost:${port}`));