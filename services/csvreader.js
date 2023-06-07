const fs = require("fs")
const CsvReader = require("csv-reader")

    let myfile = fs.createReadStream("C:\\Users\\JAHANVI\\OneDrive\\Desktop\\ROYAL\\MEAN\\seed\\ind_nifty50list.csv","utf-8")

    myfile.pipe(new CsvReader({
        parseNumbers: true, 
        parseBooleans: true, 
        trim: true
    })).on('data',function(row){
        console.log('A row arrived',row);
    }).on('end',function(){
        console.log('File read ended');
    })