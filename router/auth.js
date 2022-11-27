const express = require("express");
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
require("../db/conn");
const User = require("../models/userSchema")

const Authentication = require("../middleware/Authentication")

router.get("/", (req, res) => {
    res.send(`Hello world`);
});

// using Promisses Method 

// router.post("/register", (req, res) => {
//     const { name, email, phone, work, password, cpassword}=req.body;
//     if(!name || !email || !phone || !work || !password || !cpassword){
//         return res.status(400).json({error: "plz filled all detail"})
//     }

//     User.findOne({email:email})
//     .then((userExist)=>{
//         if(userExist){
//             return req.status(422).json({error: "email already exist"})
//         }
//         const user = new User({name, email, phone, work, password, cpassword})
//         user.save().then(()=>{
//             res.status(201).json({message: "User Successsfully Register"})
//         }).catch((err)=> res.status(500).json({error: "failed to register"}))
//     }).catch(err=>{console.log(err)})
// });



// using Async Awiat Method 


// router.post("/register", async (req, res) => {
//     const { name, email, phone, work, password, cpassword } = req.body;
//     if (!name || !email || !phone || !work || !password || !cpassword) {
//         return res.status(400).json({ error: "plz filled all detail" })
//     }
// create a validation 
router.post('/register', [

    body('name', 'enter a valid name').isLength({ min: 5 }),

    body('email', 'enter a valid email').isEmail(),
    body('phone', 'enter a valid phone').isLength({ min: 10 }),
    body('work', 'enter a valid work'),
    body('password', 'Password should be at least 7 chars long').isLength({ min: 7 }),
    body('cpassword', 'Password should be at least 7 chars long').isLength({ min: 7 }),


], async (req, res) => {
    // if error willl come 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    try {
        const userExist = await User.findOne({ email: req.body.email })
        if (userExist) {
            return res.status(422).json({ error: "Email already exist" })
        } else if (req.body.password != req.body.cpassword) {
            return res.status(422).json({ error: "Password are not matching" })
        } else {

            // passsword hash 
            const salt = await bcrypt.genSalt(10);
            const secPass = await bcrypt.hash(req.body.password, salt)
            const secPass2 = await bcrypt.hash(req.body.cpassword, salt)



            // USER CREATION IN DATBASE 
            // const user = new User({ name, email, phone, work, password, cpassword })
            const user = await User.create({
                name: req.body.name,
                email: req.body.email,
                work: req.body.work,
                phone: req.body.phone,
                password: secPass,
                cpassword: secPass2,
            })

            
        


          res.json({authtoken})
          res.json({user})

        //   user regstration 
                const userRegister = await user.save()
                if (userRegister) {
                    res.status(201).json({ message: `(${user} )User Successsfully Register` })
                }
                else {
                    res.status(422).json({ error: "failed to register" })
                }

    }


    } catch (err) {
        console.error(err);
        res.status(422).send("some error occured")
    }
});


router.post("/Login", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(401).send({ error: "please filled the data properly" });
    }
    try {
        const loginUser = await User.findOne({ email: email });
        if (!loginUser) {
            return res.status(400).send({ error: "not found" });
        }
        const isMatch = await bcrypt.compare(password, loginUser.password);
        if (isMatch) {
            const token=await loginUser.generateAuthToken();
            res.cookie("jwtoken",token,{
                expires:new Date(Date.now()+15000000),
                httpOnly:true,
                secure:true  //it is applicable when we use https method
            })
            console.log(token);
            res.send({message:"login success"});
        }else{
            res.status(400).send({error:"please enter correct data"})
        }
          
    } catch (error) {
        res.status(400).send(error)
    }
})



router.get("/About", Authentication, (req, res) => {
    res.send(req.rootUser);
})
router.get("/Logout", Authentication, (req, res) => {
    console.log("logout");
    res.clearCookie("jwtoken");
    res.status(400).send("user logout")
})


module.exports = router


