const User = require('../models/user')
const {cryptPassword,isPasswordMatches} = require('../utils/helperFunctions')
const os = require('os')
const {generateToken} = require('../utils/jwtHelper')
const Movie = require('../models/movie')
const { Result } = require('express-validator')


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
                name:userFound.firstname+" "+userFound.lastname,
                id:userFound.id
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

const getUserRentedMovies = async (req, res) => {
    const userId = req.params.id;
    let rentedMoviesList = [];
  
    try {
      // Finding user from the database using pk
      const user = await User.findByPk(userId);
      console.log("user=>", user);
      const moviesRentedString = user.movies_rented;
      console.log("movies rented =>", moviesRentedString);
      if (moviesRentedString !== null) {
        const rentedMovies = moviesRentedString.split(',');
        rentedMoviesList = await Promise.all(rentedMovies.map(async (x) => {
          const movie = await Movie.findByPk(x);
          if (movie) {
            await movie.save();
            console.log("movie =>>", movie);
            return movie;
          }
          return null;
        }));
        rentedMoviesList = rentedMoviesList.filter(movie => movie !== null);
  
        console.log('rented movies list =>', rentedMoviesList);
        return res.status(200).json(rentedMoviesList);
      } else {
        return res.status(204).json({ message: "no rented Movie" });
      }
    } catch (error) {
      console.error("Error fetching rented movies:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
  

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

const addMovieToUser=async(req,res)=>{
  
   const userId  = req.query.user
   const movieId = req.query.movie
   const movieToRent = await Movie.findByPk(movieId)
   const result = await user_movies(userId,movieId)

  if(result ===true){

     movieToRent.stock = movieToRent.stock-1
     await movieToRent.save()
   return  res.status(200).json({message:"movie added succcesfully to rented_movies"})
  }
  else return res.status(400).json({message:"couldn't add movie to rented_movies"}) 
}

const isMovieRented = async(req,res)=>{
  try{
    const user = await User.findByPk(req.query.user)
    const movieId =req.query.movie
    if(user.movies_rented==null) return res.status(204).send(true)
    else{
      const moviesArray = user.movies_rented.split(',')
      if(moviesArray.includes(movieId)) return res.status(200).send(true)

    }
    return res.status(200).send(false)
  }catch(e){
    return res.status(400).json({ereeur:e})
  }
}

const user_movies = async(userId,movieId)=>{
    try{
      const user = await User.findByPk(userId)
      console.log("hnaaaaaaa user=>",user)
      if(user.movies_rented==null) {
        user.movies_rented = movieId
      }
      else{
        const moviesArray = user.movies_rented.split(',')
        if(moviesArray.includes(movieId)){ 
          return false
        }
        user.movies_rented = user.movies_rented+','+movieId
      }
      await user.save()
      return true
    }catch(e){
      return false
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
    addMovieToUser,
    getUserRentedMovies,
    isMovieRented
}