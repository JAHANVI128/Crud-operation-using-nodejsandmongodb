const CsvReaderService = require('../services/csvreader')

module.exports.uploadIndustry = async function(req,res){

    let allIndustry = await CsvReaderService.uploadIndustry()
    res.json({
        data:allIndustry,
        msg:"Industries uploaded",
        status:200
    })
}