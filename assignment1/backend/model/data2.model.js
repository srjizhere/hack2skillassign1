const mongoose = require("mongoose");

const data2Schema = new  mongoose.Schema({
  full_name: String,
  email: String,
  team_name:String
});
const data2Model = mongoose.model("Data2", data2Schema);
 module.exports  =   {data2Model} 
