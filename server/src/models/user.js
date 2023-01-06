const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema({

    name:{
        type: 'string',
        required: true
    },
    email: {
        type: 'string',
        required: true,
        unique: true
    },
    password: {
        type: 'string',
        required: true
    },
    tokens: [
        {
            token:{
                type: 'string',
                required: true
            }
        }
    ]
})

userSchema.methods.generateAuthToken = async function(){
    try {
        let token = jwt.sign({_id: this._id.toString()}, process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({token:token})
        await this.save()
      
        return token
    } catch (error) {
        console.log(error)
    }
}

userSchema.pre('save', async function(next) {
    if(this.isModified('password')) {
        
        this.password = await bcrypt.hash(this.password, 10)
    }
    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User