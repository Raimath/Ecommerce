const express = require("express")
// const User = require("../Models/registerSchema")
const Contact = require("../Models/contactSchema")
const User = require("../Models/registerSchema")
const AllProducts = require("../Models/allProductSchema")
const DetailProduct = require("../Models/detailPoductSchema")

const router = express.Router()


router.post('/login', async (req, res) => {
    const { email, password } = req.body
    try {
        const preUser = await User.findOne({ email: email })
        console.log(preUser)
        if (preUser) {
            if (password === preUser.password) {
                res.send({ user: preUser })
            }
            else {
                res.send({ message: "invalid username or password" })
            }
        }
        else {
            res.send({ message: "User Does not exist" })
        }
    }
    catch (err) {
        console.log(err)
    }

})
router.post('/user', async (req, res) => {
    const { userid } = req.body
    try {
        const preUser = await User.findOne({ _id: userid })
        // console.log(preUser)
        if (preUser) {
            res.send({ user: preUser })
        }
        else {
            res.send({ message: "User Does not exist" })
        }
    }
    catch (err) {
        console.log(err)
    }

})

router.post('/register', async (req, res) => {
    console.log(req.body)
    const { name, email, password } = req.body

    try {
        const preUser = await User.findOne({ email: email })
        console.log(preUser)
        if (preUser) {
            res.send("User Already Exist")
        }
        else {
            const user = new User({
                name,
                email,
                password
            })
            await user.save().then(() => res.send({ message: "Registerd successfully" }))

        }
    }
    catch (err) {
        console.log(err)
    }

})

router.post('/contact', async (req, res) => {
    console.log(req.body)
    const { name, email, msg } = req.body

    try {
        const contact = new Contact({
            name,
            email,
            msg
        })
        await contact.save().then(() => res.send({ contactUser: contact }))
    }
    catch (err) {
        console.log(err)
    }

})

// router.get('/allproducts', async (req, res) => {

//     try {
//         const allProducts = await AllProducts.find()
//         console.log(allProducts)
//         if (allProducts) {
//             res.send(allProducts)
//         }
//         else {
//             res.send({ message: "Products Not Found" })
//         }
//     }
//     catch (err) {
//         console.log(err)
//     }

// })


router.get('/allproducts', async (req, res) => {

    try {
        const allProducts = await AllProducts.find().select('-description -imageurl -moreinfo');
        res.send({ allproducts: allProducts })
        // console.log(allProducts)
    }
    catch (err) {
        console.log(err)
    }
})

router.get('/singleproduct', async (req, res) => {
    const productid = req.query.id
    // console.log(productid)
    try {
        const singleproduct = await AllProducts.findOne({ _id: productid })
        res.send({ singleproduct })
    }
    catch (err) {
        console.log(err)
    }
})

router.post('/cart', async (req, res) => {
    const { userid, productid } = req.body
    try {
        const preUser = await User.findOne({ _id: userid })
        if (preUser) {
            console.log(preUser)
            if (!preUser.carts) {
                preUser.carts = [];
            }
            preUser.carts.push(productid);
            await preUser.save();
            res.status(200).send({ carts: preUser.carts });
        }
    }
    catch (err) {
        console.log(err)
    }

})


router.post('/removecart', async (req, res) => {
    const { userid, newItems } = req.body
    try {
        const preUser = await User.findOne({ _id: userid })
        if (preUser) {
            
            preUser.carts = newItems;
            await preUser.save();
            res.status(200).send({ carts: preUser.carts });
           
        }

        else {
            return res.status(404).send({ message: 'User not found' });
        }

    }
    catch (err) {
        console.log(err)
        res.status(500).send({ message: 'Internal server error' });
    }

})


module.exports = router;