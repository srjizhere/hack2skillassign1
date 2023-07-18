const express = require('express');
const { fetchDataController } = require('../controller/fetchData.controller');

const fetchDataRouter = express.Router();

fetchDataRouter.get('/',fetchDataController)

module.exports = {
    fetchDataRouter
}