const express = require('express')
const router = express.Router()
const User = require('../models/user')
const catchAsync = require('../utils/catchAsync')

router.post('/sign-up', catchAsync(async (req, res) => {
    // sign up
    const userDetails = req.body
    const newUser = new User(userDetails)
    await newUser.save()
    res.status(200).json(newUser)
}))

router.post('/sign-in', catchAsync(async (req, res) => {
    // sign in
    const userDetails = req.body
    if (userDetails.username && userDetails.password) {
        const user = await User.findOne({ username: userDetails.username });
        if (!user) {
           return res.status(401).json({ error: 'invalid username' })  
        }

        if (user.password.toString() !== userDetails.password.toString()){
            return res.status(401).json({ error: 'invalid password' })
        }       

        return res.status(200).send({ message: 'auth success' });
    }

    return res.status(401).json({ error: 'credentials missing' })  
}))

module.exports = router;
