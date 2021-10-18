const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3001;

const allNotes = require ("./db/db.json, utf8");

//notes.html 
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});
// index.html 
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});
// db.json file
app.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/db/db.json"));

    readTextFile('Develop/db/db.json', function (text) {
        const dbData = db.json(text);
        console.log(dbData);
    });
});
//listener
app.listen(PORT, () => console.log(3001));