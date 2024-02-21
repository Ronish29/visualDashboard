const DataModel = require('../models/DataModel');
const jsonData = require('../utils/data.json');

exports.getData = async (req, res) => {
    try{
        const fetchedData = await  DataModel.find({});

        res.status(200).json({
            data:fetchedData,
        })
    }
    catch(error){
        console.error(error.message);
        console.log(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"Server error",
        });
    }
}

exports.insertData = async (req, res) => {
    try {
        const options = { upsert: true };

        for (const doc of jsonData) {
            const filter = { title: doc.title };
            const update = { $set: doc };
            await DataModel.updateOne(filter, update, options);
        }

        res.status(200).json({
            success: true,
            message: "Data inserted successfully",
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Server error",
        });
    }
}