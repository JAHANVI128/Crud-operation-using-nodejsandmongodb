const EqModel = require('../model/eqModel')
const CsvReaderService = require('../services/csvreader')

module.exports.uploadEquity = async function(req,res){

    let allEq = await CsvReaderService.uploadEquity()
    console.log("allEquity => ");
    console.log(allEq);

    EqModel.insertMany(allEq).then(data => {

        res.json({
            data:allEq,
            msg:"Equities uploaded",
            "status":200
        })
    })
}