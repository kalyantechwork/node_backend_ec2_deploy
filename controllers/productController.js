
const Product = require("../models/Product")

exports.addProduct=async(req, res)=>{
    try {
        const {productname, productprice, productdescription} = req.body

        const newItem = await Product.create(
            {productname, productprice, productdescription}
        )

        return res.status(200).json({msg:"success", newItem})
        
    } catch (error) {
        res.status(400).json({msg:"failed to insert"})
    }
}