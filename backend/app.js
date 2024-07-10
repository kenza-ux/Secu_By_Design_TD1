
const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 9000;
const Movies= require('./models/movie')
const {Op} = require('sequelize')
const movieRoutes = require('./routes/MovieRoutes')
const userRoutes = require('./routes/userRoutes')
const {MODE} = require('../application_mode')
const rateLimit = require('express-rate-limit');
const sequelize = require('./config/database')

app.use(express.json());
app.use(cors())


const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 50,
  message: 'Too many requests from this IP, please try again later.'
});

if(MODE==='safe')app.use(limiter);

app.get('/', async(req, res) => {
  console.log(MODE)
  let password ='$2b$10$Ylr/5/hy3SjA5hUezH9bS.TEJK57mypFkALXD3gqhqAO3ML9Xi3UG'
  const [results, metadata] = await sequelize.query('select username,password from users where id='+req.query.id)
  console.log(results)
 return  MODE==='safe'?res.json({message:"safe mode"}): res.json({message:"unsafe mode"})
});

app.use('/api/movies',movieRoutes)

app.use('/api/user',userRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
