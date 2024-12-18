const mongoose=require("mongoose")


const allProductsSchema = new mongoose.Schema({
    _id:Number,
    title: String,
    description:String,
    price: Number,
    strikeprice: Number,
    discount:Number,
    featured:Boolean,
    category:String,
    image: String,
    productlink:String,
    imageurl:[],
    moreinfo:[]
})

// const Contact = new mongoose.model("Contact", conatctSchema)
// exports.Contact = Contact;
module.exports = mongoose.model("AllProducts",allProductsSchema)