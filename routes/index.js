const express = require('express');
const router = express.Router()

const { addProduct, listProduct } = require("../controllers/product")

router.post("/addproduct", addProduct)
router.get("/listproduct", listProduct)

module.exports = router
