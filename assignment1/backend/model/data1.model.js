const mongoose = require('mongoose');

const data1Schema = new  mongoose.Schema({
        full_name:String,
        email:String,
        number:Number,
        city:String,
        url:String
});

const data1Model = mongoose.model("Data1", data1Schema);

module.exports = {data1Model};