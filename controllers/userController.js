const User = require('../models/User')

const info = async (req, res)=>{
    // console.log(req.header('Authorization'), 'in the route')
    try{
        const foundUser = await User.findOne({username: req.params.username})

        res.status(200).json({ 
            username: foundUser.username, 
            email: foundUser.email 
        })

    }catch(error){
        res.status(400).status.json({error: error.message})
    }
}

const allUsers =  async (req, res) =>{
    try{
        const users = await User.find({ users })
        res.status(200).json()
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

const clear = async (req, res) => {
    try{
        await User.deleteMany({})
        res.status(200).json({msg: 'all users deleted'})
    }catch(error){
        res.status(400).json(400).json({error: error.message})
    }
}

module.exports = {
    info,
    allUsers,
    clear
};


