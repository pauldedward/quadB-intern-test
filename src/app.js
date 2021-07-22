const express = require("express");
const path = require("path");
const ejs = require("ejs");
const routes = require(path.join(__dirname, "/routes/index.js"));

const app = express();  
app.use("/", routes)
app.use(express.static(path.join(__dirname, "../public")));
app.set("view engine", "ejs")

const PORT = process.env.PORT || 3000; 


app.listen(PORT, () => {
    console.log("Server started listening on port : ", PORT);
});

