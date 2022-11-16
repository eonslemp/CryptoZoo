const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

const register = async (req, res) =>{
    // 1. check if user exists req.body { username, email, password }
    try {
        const foundUser = await User.findOne({username: req.body.username})
        if(foundUser){
            return res.status(400).json({error: 'user exists'})
        }
    // 2. if not exist then encrypt password
        const salt = await bcrypt.genSalt(10)
        const encryptedPassword = await bcrypt.hash(req.body.password, salt)
        console.log(encryptedPassword)
    // 3.  add new user to db with encrypted password
        const newUser = await User.create({ ...req.body, password: encryptedPassword })
    // 4. generate a JWT token vvvvv
        const payload = { id: newUser._id, user: newUser.username }
        let token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 30 })

        res.status(200).json({ token })
        //  

        } catch (error){
            console.log(error)
            res.status(400).json({ error: error.message })
    }

}

const login = async (req, res) =>{
    try{
    // 1.  check if user exists
    const foundUser = await User.findOne({username: req.body.username})
    if(!foundUser){
        return res.status(404).json({error:  'no user exists'})
    }
    // 2.  check if user password is correct
    // compare 1st arg = text password and 2nd arrg = encrypted password
    const valid = await bcrypt.compare(req.body.password, foundUser.password)

    if(!valid){
        return res.status(403).json({error: 'invalid password/username combo'})
    }
    // 3.  generate token and return it to user
    const payload = { id: foundUser._id, user: foundUser.username }
    let token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 30 })

    res.status(200).json({ token })

    } catch(error){
        console.log(error)
        res.status(400).json({ error: error.message })
    }

}

module.exports = {
    register,
    login
}
