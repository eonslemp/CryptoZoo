const jwt = require('jsonwebtoken')

async function authorize(req, res, next){
try {
//  check headers for token
    let token = req.header('Authorization')
    if (!token){
        throw new Error('no token')
    }

    token = token.replace('Bearer ', '')

    const payload = jwt.verify(token, process.env.JWT_SECRET)

    if(payload.error) {
        throw new Error(payload.error)
    }

    req.userId = payload.id

    next()

    } catch (error) {
        res.status(403).json({error: error.message})
    }

}

module.exports = {authorize};