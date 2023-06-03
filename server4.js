const express = require("express")
const calc = require("./calc")

const app = express()

app.use(express.urlencoded())

app.post("/add",calc.addition)
app.post("/sub",calc.subtraction)
app.post("/add",calc.multipication)

app.listen(9999)
