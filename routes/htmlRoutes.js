// "path" allows us to access the file path. 
var path = require("path");

// "/notes" responds with the notes.html file
var router = require("express").Router();

router.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// All other routes respond with the index.html file
router.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
module.exports = router;