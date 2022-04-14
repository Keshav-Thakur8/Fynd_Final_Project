/* Requiring dotenv file --> Its simply a environment variable file.
In this file we set a variable with value and that you wouldn’t want to share with anyone, 
purpose of file is keep as secret and secure because in .env file we store our database password, 
username, API key etc… , make sure you don't push .env file on gith repo */
require("dotenv").config

/* Package import */
const express = require("express")
const cors = require("cors")

/* Accessing API */
const contactRoute = require('./api/routes/contactRoute.js');

/* Run Express as a function */
const app = express();

//middleware
app.use(express.json());
app.use(cors());

/* Using the contactRoute */
app.use("/", contactRoute);

/* Port on which server runs */
const port = process.env.PORT || 4000;

/* Production Environment */
if(process.env.NODE_ENV === "production") {
    app.use(express.static(__dirname + "/dist/"));
    app.get("*", (req,res) => {
        res.sendFile(__dirname + "/dist/index.html");
    })
}

/* bind and listen the connections on the specified host and port. 
This method is identical to Node’s http.Server.listen() method. */
app.listen(port, () => console.log(`server running at http://localhost:${port}`));

module.exports = app;