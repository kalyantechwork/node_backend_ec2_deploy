
const controller = require("../controllers/productController")
const express = require("express")

const hyd = express.Router()

hyd.post("/add-product", controller.addProduct)

module.exports = hyd