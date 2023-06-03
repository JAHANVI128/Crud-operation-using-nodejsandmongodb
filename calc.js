function add(req,res){
    
    let no1 = parseInt(req.body.no1) 
    let no2 = parseInt(req.body.no2)
    
    console.log("no1 => "+no1);
    console.log("no2 => "+no2);

    let ans  = no1 + no2; 

    res.end("add => "+ans)

}

function sub(a,b){

    
}

function mul(a,b){
    c = a*b
    console.log("mul = "+c);
}

var x = 1000;

module.exports.addition = add
module.exports.subtraction = sub
module.exports.multipication = mul

module.exports.x = x