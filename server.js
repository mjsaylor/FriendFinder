// Your server.js file should require the basic npm packages we've used in class: express and path.
const express = require("express");
const path = require("path")

// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const publicFolder = path.join(__dirname, 'app/public')
console.log(publicFolder)
app.use('/static', express.static(path.join(__dirname, 'app/public')))

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});

