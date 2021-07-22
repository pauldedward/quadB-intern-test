const express = require("express");
const axios = require("axios");
const path = require("path");
const { convertData, saveData, getDataFromDB } = require(path.join(__dirname, "../controllers/index.js"));

router = express.Router();
router.use( "/", express.static(path.join(__dirname, "../../public")));


router

    //base route
    .get("/", async (req, res) => { 
        const crypto = await getDataFromDB();
        return res.render("index",{crypto:crypto});
        // res.sendFile(path.join(__dirname , "../../public/index.html"));
    })


    // route to get the API data [crypto info]
    .get("/api", async (req, res) => {

        // get the data from the API
        const response = await axios.get("https://api.wazirx.com/api/v2/tickers")
        const cryptoObject = response.data

        // convert the data object into array of objects with the crypto info
        const cryptoData = convertData(cryptoObject)

        //save the data to the database
        await saveData(cryptoData)

        res.render("api")
    })


    //route for all the other routes [404]
    .get("*" , (req, res) => {
        res.send("404: Page Not Found");
    })


module.exports = router;