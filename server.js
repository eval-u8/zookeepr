const fs = require("fs");
const path = require("path");
const express = require("express");
const { animals } = require("./data/animals");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const PORT = process.env.PORT || 3001;
const app = express();
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// The express.urlencoded({extended: true}) method is a method built into Express.js. It takes incoming POST data and converts it to key/value pairings that can be accessed in the req.body object. The extended: true option set inside the method call informs our server that there may be sub-array data nested in it as well, so it needs to look as deep into the POST data as possible to parse all of the data correctly.

// parse incoming JSON data
app.use(express.json());
// The express.json() method we used takes incoming POST data in the form of JSON and parses it into the req.body JavaScript object. Both of the above middleware functions need to be set up every time you create a server that's looking to accept POST data.

app.use(express.static("public"));
// The way it works is that we provide a file path to a location in our application (in this case, the public folder) and instruct the server to make these files static resources. This means that all of our front-end code can now be accessed without having a specific server endpoint created for it!

// Every time we create a server that will serve a front end as well as JSON data, we'll always want to use this middleware.

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now in port ${PORT}`);
});
