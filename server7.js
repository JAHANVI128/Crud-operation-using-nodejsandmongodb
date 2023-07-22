const express = require("express")
const mongoose = require("mongoose")
const productController = require("./controller/productController")
const categoryController = require("./controller/categoryController")
const productControllerDb = require("./controller/productControllerDb")
const categoryControllerDb = require("./controller/categoryControllerDb")
const industryController = require("./controller/industryController")
const eqController = require("./controller/eqController")

const app = express()

app.use(express.urlencoded({
    extended:true
}))
app.use(express.json())

// mongoose.connect("mongodb://127.0.0.1:27017/mean23").then(() => {
//     console.log("Dbconnected....")
// })

let dbUrl = "mongodb+srv://root:jairootjairoot@cluster0.u62v97c.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(dbUrl).then(() => {
    console.log("Dbconnected....")
})

//product routes

app.post("/addproduct2",productController.addProduct)
app.get("/product",productController.getAllProducts)
app.get("/product/:productId",productControllerDb.getProductById)
app.delete("/product/:productId",productController.deleteProductById)
app.post("/products/filter",productControllerDb.filterProducts)
app.put("/product",productControllerDb.updateProduct)

//category routes

app.post("/addcategory",categoryController.addCategory)
app.post("/getallcategory",categoryControllerDb.getAllCategory)

//industry routes

app.post("/industry",industryController.uploadIndustry)

//equity routes

app.post("/equity",eqController.uploadEquity)
app.get("/equity",eqController.getAllEquity)

app.listen(9999)