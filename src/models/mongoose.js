const mongoose = require('mongoose');

// Connect to database (mongo DB)
mongoose.connect('mongodb://localhost:27017/quadDB' , {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connected db')
});

//schema to store data
const cryptoSchema = mongoose.Schema({
    
        "base_unit": {
            "type": "String"
        },
        "last": {
            "type": "String"
        },
        "volume": {
            "type": "String"
        },
        "sell": {
            "type": "String"
        },
        "buy": {
            "type": "String"
        },
        "name": {
            "type": "String"
        }
});


module.exports = mongoose.model('crypto', cryptoSchema);