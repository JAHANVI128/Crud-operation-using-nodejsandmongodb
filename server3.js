const express = require("express")
const order = require("./order")
const calc = require("./calc")

const app = express()

app.get("/vieworders",order.viewOrders)
app.get("/vieworderbyid",order.viewOrderById)

app.post("/view",order.viewOrders)

app.listen(9999)