const eqmodel = require('../model/eqModel')
const CsvReaderService = require('../services/csvreader')

module.exports.uploadEquity = async function(req,res){

    let allEq = await CsvReaderService.uploadEquity()

    eqmodel.insertMany(allEq).then(data => {

        res.json({
            data:allEq,
            msg:"Equities uploaded",
            status:200
        })
    })
}