const express = require("express")
const mongoose = require("mongoose")
const productController = require("./controller/productController")
const categoryController = require("./controller/categoryController")
const productControllerDb = require("./controller/productControllerDb")
const categoryControllerDb = require("./controller/categoryControllerDb")
const { uploadIndustry } = require("./controller/industryController")
const industryController = require("./controller/industryController")

const app = express()

app.use(express.urlencoded({
    extended:true
}))
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/mean23").then(() => {
    console.log("Dbconnected....")
})

app.post("/addproduct2",productController.addProduct)
app.get("/product",productController.getAllProducts)
app.get("/product/:productId",productControllerDb.getProductById)
app.delete("/product/:productId",productController.deleteProductById)
app.post("/products/filter",productControllerDb.filterProducts)
app.put("/product",productControllerDb.updateProduct)


app.post("/addcategory",categoryController.addCategory)
app.post("/getallcategory",categoryControllerDb.getAllCategory)


app.post("/industry",industryController.uploadIndustry)


app.listen(9999)