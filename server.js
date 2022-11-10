const express = require('express')
const mongoConfig = require('./config')
require('dotenv').config()
const app = express()
const cors = require('cors')


app.use(cors())
app.use(express.json())
// const PORT = process.env.PORT
const PORT = 9000;

app.get('/test', (req, res)=>{
    res.status(200).json({msg: 'Hello!'})
})

app.post('/test2', (req, res) => {
    console.log(req.body)
    res.status(200).json({msg: 'thanks!'})
})

app.listen(PORT, () =>{
    console.log('listening on port: ' + PORT)
    mongoConfig()
})