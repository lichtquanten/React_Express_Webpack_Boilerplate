var express = require("express");
var ej = require("ejs");
var path = require("path");
var bodyParser = require("body-parser");
var morgan = require("morgan");

var app = express();
var PORT = process.env.PORT || 8000;

//config
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//views
app.use(express.static(path.join(__dirname, "..", "public")));

// routes
require('./controllers/routes.js')(app);

// launch
app.listen(PORT, () => {
    console.log("Server running on ", PORT);
});
