// import model 
const Product = require("../../models/product");
const Cart = require("../../models/Cart");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");


const { response } = require("express");

exports.createCart = async (req, res) => {
    try {
       
        const { product,token } = req.body;
        
        const getProduct = await Product.findById({_id:product});
            
        const { image, name } = getProduct;
       const price = getProduct.new_price;
       const decode = jwt.verify(token, "prayas");
       
       let finder = decode.id;
        const cart = new Cart({
            product, image, name,price
        })
      
        const savedCart = await cart.save();
        
        
        
        
        
        const updatedUserCart = await User.findByIdAndUpdate(finder, { $push: { cart: savedCart._id } },
            { new: true })
            console.log(updatedUserCart);
        

        res.json({
            post: updatedUserCart,
        })
    }
    catch (err) {
        return res.status(500).json({
            error : "Error while creating cart",            
        })
    }
}