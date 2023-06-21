const mongoose = require('mongoose')
const Schema = mongoose.Schema

let EquitySchema = new Schema({
    name:{
        type: String,
        required: {
            value:true,
            message: 'Please enter Equity name'
        },
        lowercase:true
    }
})

module.exports = mongoose.model("Equity",EquitySchema)