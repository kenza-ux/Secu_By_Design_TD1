const User = require('../models/user')
const {cryptPassword,isPasswordMatches} = require('../utils/helperFunctions')
const os = require('os')
const {generateToken} = require('../utils/jwtHelper')


const registerUser = async(req,res)=>{
    let username = req.body.username
    console.log("username here=>",username)
    const userFound = await userByUsername(username)
    if(userFound===null){
        console.log("this is the found username =>",userFound)
        const user = req.body
        user.password = await  cryptPassword(user.password)
        const a = (await User.create(user))
        res.json(user)
    }
    else {
        console.log("this is the found username =>",userFound)
        res.status(400).json({
            msg:"user already exist",
            success:false
        })
    }
}
const login = async (req,res)=>{
    let {username,password} = req.body
    console.log(password)
    let userFound = await userByUsername(username)
    if(userFound){
        if( await isPasswordMatches(password,userFound.password)){
            let tkn =    generateToken({
                id:userFound?.id,
                username:userFound.username,
                firstname:userFound.firstname,
                lastname:userFound.lastname,
            }) 
            res.json({
                token:tkn,
                name:userFound.firstname+" "+userFound.lastname
            })
        }
        else {
            res.status(400).json({message:"passwords does not match"})
        }
    }
    else {
        res.status(400).json({message:`no user with ${username} found`})
    }
}

const logOut = async(req,res)=>{
    const refreshToken = req.headers['refreshtoken'];
    console.log(refreshToken)
    try {
        const user = await User.findOne({refreshToken:refreshToken})
        console.log(user)
        if(user){
            user.refreshToken = ''
            user.save()
            res.status(200).json({message:"loged out succefully"})
        }
        res.status(400).json({message:"somethin went wrong...maybe you are already logedout"})
            
    } catch (error) {
        console.log("erreuur =>"+error)
        
    }
   
    
}

const getAllUsers = async (req,res)=>{
    try {
        const result = await User.find();
        res.status(200).json(result);
    } catch (error) {
        console.log("erreeur=>",error)
        res.status(500).json({message:"somethig went wrong try again later"})
    }
   
     
}

const userByUsername=async (username)=>{
    try {
        const userFound = await User.findOne({where:{username:username}})
        console.log("this is the user found => ",userFound)
        if(username.length !==0 && userFound){

            return userFound;
        }
    } catch (error) {
        console.log("erreur  =>",error)
    }
 
    return null;  
}
module.exports={
    registerUser,
    login,
    logOut,
    getAllUsers,
}