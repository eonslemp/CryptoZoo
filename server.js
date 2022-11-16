const express = require('express')
const mongoConfig = require('./config')
const cors = require('cors')

const app = express()

const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')

const { authorize } = require('./middleware/authmiddleware')

require('dotenv').config()


app.use(cors())
app.use(express.json())
app.use('/auth', authRoutes)
app.use('/users', authorize, userRoutes)

// const PORT = process.env.PORT
const PORT = 9000;

app.listen(PORT, () =>{
    console.log('listening on port: ' + PORT)
    mongoConfig()
})