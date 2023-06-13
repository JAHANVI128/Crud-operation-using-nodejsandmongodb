const CsvReaderService = require('../services/csvreader')

module.exports.uploadIndustry = function(req,res){

    let allIndustry = CsvReaderService.uploadIndustry()
    res.json({
        data:allIndustry,
        msg:"Industries uploaded",
        status:200
    })
}