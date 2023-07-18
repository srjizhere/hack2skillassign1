const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;

const connenction = mongoose.connect(MONGO_URI,{
    useNewUrlParser:true,
});

module.exports = {
    connenction
}
