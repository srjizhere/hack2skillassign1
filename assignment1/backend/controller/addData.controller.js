
const { model } = require('mongoose');
const Data1 = require('../MOCK-DATA1.json');
const Data2 = require('../MOCK-DATA2.json');
const {data1Model} = require('../model/data1.model');
const {data2Model} = require('../model/data2.model');

const addData1Controller = async (req, res) => {
    console.log(req);
  try {
    const result = await data1Model.insertMany(Data1)
    res.json(result)
    // const result = await Data1.i;
  } catch (error) {
    console.log("error adding data to collection 1",error);
  }
};

const addData2Controller = async(req,res)=>{
    console.log(req);
    try {
        const result = await data2Model.insertMany(Data2);
        res.json(result)
    } catch (error) {
        console.log('error whlile adding to collection2',error);
    }
}


module.exports = {
    addData1Controller,addData2Controller
}