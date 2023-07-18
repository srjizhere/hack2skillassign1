const express = require('express');
const { addData1Controller, addData2Controller } = require('../controller/addData.controller');

const addDataRouter = express.Router();

addDataRouter.get("/1", addData1Controller);
addDataRouter.get("/2", addData2Controller);



module.exports  = addDataRouter
