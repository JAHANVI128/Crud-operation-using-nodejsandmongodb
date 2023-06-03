function viewOrders(req,res){
    res.end("View Orders")
}

function viewOrderById(req,res){
    res.end("View Order by Id")
}

module.exports.viewOrders = viewOrders
module.exports.viewOrderById = viewOrderById
