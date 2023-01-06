const jwt = require('jsonwebtoken');
const User = require('../models/user');

const Authenticate = async (req, res, next) => {
    try {

        const token = req.cookies.jwt
        const verifitoken = jwt.verify(token, process.env.SECRET_KEY)

        const rootUser = await User.find({_id: verifitoken._id, "tokens.token":token});

        if(!rootUser){
            throw new Error(`Couldn not find user`);
        }

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;

        next();

    }catch(err) {
        res.status(401).send('Unauthorised: No token present')
        console.log(err);
    }
}

module.exports = Authenticate;