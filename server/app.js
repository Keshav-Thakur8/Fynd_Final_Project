require("dotenv").config
const express = require("express")
const cors = require("cors")
const path = require("path")

const contactRoute = require('./routes/contactRoute')

const app = express();

//middleware
app.use(express.json());
app.use(cors());

app.use("/", contactRoute);

const port = process.env.PORT || 4000;

if(process.env.NODE_ENV === "production") {
    app.use(express.static(__dirname + "/dist/"));
    app.get("*", (req,res) => {
        res.sendFile(__dirname + "/dist/index.html");
    })
}
app.listen(port, () => console.log(`server running at http://localhost:${port}`));