// controller/fetchData.controller.js
const { data1Model: Data1 } = require("../model/data1.model");
const { data2Model: Data2 } = require("../model/data2.model");

exports.fetchDataController = async (req, res) => {
  try {
    const result = await Data1.aggregate([
      {
        $lookup: {
          from: "data2", // The name of the second collection
          localField: "email", // The field in Data1 to match with
          foreignField: "email", // The field in Data2 to match with
          as: "teamData", // The name of the field to store the matching Data2 documents
        },
      },
      {
        $project: {
          _id: 0,
          full_name: 1,
          email: 1,
          number: 1,
          city: 1,
          url: 1,
          team_name: { $arrayElemAt: ["$teamData.team_name", 0] },
        },
      },
    ]).exec();

    res.json(result);
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ error: "Failed to fetch data" });
  }
};
