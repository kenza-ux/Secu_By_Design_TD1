const bcrypt = require('bcrypt')

const cryptPassword = async(password)=>{
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password,salt)
}

isPasswordMatches = async (password,cryptedPassword)=>{
    return await bcrypt.compare(password,cryptedPassword)
}

module.exports={cryptPassword,isPasswordMatches}