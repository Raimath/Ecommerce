const mongoose=require("mongoose")


const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    msg: String
})

// const Contact = new mongoose.model("Contact", conatctSchema)
// exports.Contact = Contact;
module.exports = mongoose.model("Contact",contactSchema)