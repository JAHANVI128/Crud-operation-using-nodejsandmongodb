http = require("http")

http.createServer(function(req,res){
    // console.log("Server works...requesting..."+req.url);
    // res.end("Hii");

    let url = req.url

    if(url == "/welcome"){
        res.end("Welcome...")
    }else if(url == "/time"){
        let d = new Date();
        res.end(d+""+d.getHours())
    }else{
        res.end("HII");
    }

}).listen(9999)