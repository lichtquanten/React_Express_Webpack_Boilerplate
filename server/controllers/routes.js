var path = require("path");

var htmlRoot = path.join(__dirname, "..", "..", "public", "html");

module.exports = function(app) {

    app.get('/', function(req, res) {
        res.sendFile("index.html", {root: htmlRoot});
    })
    app.get('/users', function(req, res) {
        res.send("HEY FAM");
    });
}
