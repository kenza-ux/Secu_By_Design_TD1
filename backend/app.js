
const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 9000;
const Movies= require('./models/movie')
const {Op} = require('sequelize')
const movieRoutes = require('./routes/MovieRoutes')
app.use(express.json());
app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.use('/api/movies',movieRoutes)



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
