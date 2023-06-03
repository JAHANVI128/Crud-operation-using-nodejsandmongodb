const express = require("express")
const mongoose = require("mongoose")
const productController = require("./component/productController")
const categoryController = require("./component/categoryController")
const productControllerDb = require("./component/productControllerDb")
const categoryControllerDb = require("./component/categoryControllerDb")

const app = express()

app.use(express.urlencoded({
    extended:true
}))
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/mean23").then(() => {
    console.log("Dbconnected....")
})

app.post("/addproduct2",productController.addProduct)
app.get("product",productController.getAllProducts)
app.get("/product/:productId",productControllerDb.getProductById)
app.delete("/product/:productId",productController.deleteProductById)
app.post("/products/filter",productControllerDb.filterProducts)
app.put("/product",productControllerDb.updateProduct)


app.post("/category",categoryController.addCategory)
app.post("category",categoryControllerDb.getAllCategory)

app.listen(9999)