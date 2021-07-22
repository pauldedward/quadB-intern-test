const path = require("path");
const Crypto = require(path.join(__dirname, "../models/mongoose.js"))

//converts data into Array
function convertData(data) {
    const convertedData = []
    for (let [key, value] of Object.entries(data)) {
        const name = value.name
        const last = value.last
        const buy = value.buy
        const sell = value.sell
        const baseUnit = value.base_unit
        const volume = value.volume
        convertedData.push({
            "name"   : name,
            "last"   : last,
            "buy"    : buy,
            "sell"   : sell,
            "base_unit" : baseUnit,
            "volume" : volume
        })
    }

    //Sort array according to the last value since market capital is not given in the API
    convertedData.sort((b, a) => a.last - b.last)

    //returning top 10 crypto
    return convertedData.slice(0, 10)
}

//saves crypto info to DB
async function saveData(data) {

    //delete all the documents in the crypto collection
    await Crypto.deleteMany({}, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Deleted all documents");
        }
    })

    //save the new data to the crypto collection
    await Crypto.insertMany(data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("inserted successfully");
        }
    });

    return
}

//query all documents from DB
async function getDataFromDB() {
    return await Crypto.find({},(err, documents) => {
        if(!err) {
            return documents;
        } else {
            console.log(err);
        }
    })
}

module.exports = {
    convertData,
    saveData,
    getDataFromDB
}