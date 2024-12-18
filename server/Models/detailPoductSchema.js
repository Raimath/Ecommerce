const mongoose=require("mongoose")


const detailProductSchema = new mongoose.Schema({
    _id:Number,
    title: String,
    description:String,
    price: Number,
    strikeprice: Number,
    discount:Number,
    featured:Boolean,
    category:String,
    productlink:String,
    imageurl: [],
    moreinfo:[]
})


// const Contact = new mongoose.model("Contact", conatctSchema)
// exports.Contact = Contact;
module.exports = mongoose.model("DetailProduct",detailProductSchema)