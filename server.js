const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const mongoConfig = require('./config')

const app = express()
const cors = require('cors')

const User = require('./models/User')


require('dotenv').config()


app.use(cors())
app.use(express.json())
// const PORT = process.env.PORT
const PORT = 9000;

app.post('/register', async (req, res) =>{
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

})

app.post('/login', async (req, res) =>{
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

})

app.get('/users', async (req, res) =>{
    try{
        const users = await User.find({ users })
        res.status(200).json()
    } catch(error){
        res.status(400).json({error: error.message})
    }
})
app.delete('/clear', async (req, res) => {
    try{
        await User.deleteMany({})
        res.status(200).json({msg: 'all users deleted'})
    }catch(error){
        res.status(400).json(400).json({error: error.message})
    }
})

app.listen(PORT, () =>{
    console.log('listening on port: ' + PORT)
    mongoConfig()
})