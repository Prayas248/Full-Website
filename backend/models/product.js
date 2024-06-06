const mongoose= require('mongoose');

//for women


const Product = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
   },
   image:{
        type:String,
        required:true,
   },
   category: {
     type: {
       // Main category (e.g., Men, Women, Kids)
       maincategory: {
         type: String,
         required: true,
       },
       // Subcategories within the main category
       subcategories: {
         type: String,
         required: true,
       },
       lastcategories:{
          type:String,
          required:true,
       },
     },
     required: true,
   },
   new_price:{
        type:Number,
        required:true,
   },
   old_price:{
        type:Number,
        required:true,
   },
   popular:{
     type:Boolean,
     default:false,
   },
   new_collection:{
     type:Boolean,
     default:false,
   },
   material:{
        type:String,
        required:true,
   },
   available:{
        type:String,
        required:true,
   },
   product_details:{
        type:String,
        required:true,
   },
   quantity:{
        type:Number,
        
   },
   sku_code:{
     type:String,
   },
   stock_management:{
     type:Boolean,
     default:false,
   },
   sold_individually:{
     type:Boolean,
     default:false,
   },
   weight:{
     type:Number,
   },
   dimensions:{
     length:{
          type:Number,
     },
     width:{
          type:Number,
     },
     height:{
          type:Number,
     }
   },
   shipping_class:{
     type:String,
   },
   stock_status:{
     type:String,
   },
   material_care:{
        type:String,
        required:true,
   },
   shipping:{
          type:String,
          
   },
   sale_quantity:{
          type:Number,
          default:0,
   },
   sold_items:{
          type:Number,
          default:0,
   },
   sale_date_from:{
          type:Date,
   },
   sale_date_end:{
          type:Date,
   },
   date:{
        type:Date,
        default: Date.now,
   },
   reviews : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : "Review",
    }],
});

module.exports = mongoose.model("Product", Product);