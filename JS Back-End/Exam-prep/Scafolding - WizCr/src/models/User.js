const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema= new mongoose.Schema({
    firstName: {type: 'string', required: true},
    lastName: {type: 'string', required: true},
    email:{type: 'string', required: true, unique: true},
    password:{type: 'string', required: true},
})
userSchema.path('email').validate(function(emailInput){
    email = mongoose.model('User').findOne({email: emailInput});
    return !!email
}, `Email already exists`)

userSchema.virtual('repeatPassword').set(function(rePass) {
    if(rePass !== this.password) {
        throw new Error('Passwords do not match')
    }
})

userSchema.pre('save', async function(){
    const hash= await bcrypt.hash(this.password,10)
    this.password =hash
})
const User= mongoose.model('User', userSchema)

module.exports = User 