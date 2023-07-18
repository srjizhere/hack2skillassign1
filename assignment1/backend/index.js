const express  = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()
const cors = require('cors');
const mongoose = require('mongoose');
const { connenction } = require('./config/db');
const addDataRouter = require('./routes/addData.route');
const { data1Model } = require('./model/data1.model');
const { data2Model } = require('./model/data2.model');
const { fetchDataRouter } = require('./routes/fetchData.route');


const app = express();
const port  = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());
 connenction;
 app.get('/get1',async(req,res)=>{
   const result =  await data1Model.find().exec()
   console.log(result)
   return  res.send(result)
 })
 app.get('/get2',async(req,res)=>{
   const result =  await data2Model.find().exec()
   return  res.send(result)
 })
app.use("/add", addDataRouter);
app.use("/fetchdata", fetchDataRouter);



app.listen(port,async()=>{
    try {
        console.log("Connected to DB");
        
    } catch (error) {
        console.log('error while connecting to Db');
    }
    console.log(`App is running on port ${port}`);
})
