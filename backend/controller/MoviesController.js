const Movies= require('../models/movie')
const {Op} = require('sequelize')

const getMovies=async(req,res)=>{
try{
  const limit = req.query.limit || 15;
  const page = req.params.page
  const movies = await Movies.findAndCountAll({
    limit,offset:(page-1)*limit
  })
  res.json({
    total: movies.count,
    pages: Math.ceil(movies.count / limit),
    currentPage: page,
    data: movies.rows
  });
} catch (error) {
  console.error('Error fetching movies:', error);
  res.status(500).json({ error: 'Internal server error' });
}
};

 const getMovieByCategorie = async (req, res) => {
    try {
      const page =req.params.page;
      const categorie = req.query.categorie;
  
      if (!categorie) {
        return res.status(400).json({ error: 'Category query parameter is required' });
      }
  
      const limit = req.query.limit |15;
      const offset = (page - 1) * limit;
  
      const movies = await Movies.findAndCountAll({
        where: {
          categorie: {
            [Op.like]: `%${categorie}%`
          }
        },
        limit,
        offset
      });
  
      res.json({
        total: movies.count,
        pages: Math.ceil(movies.count / limit),
        currentPage: page,
        data: movies.rows
      });
    } catch (error) {
      console.error('Error fetching movies:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }


  const searchMovieByName = async (req, res) => {
    try {
      const page =req.params.page || 1
      const title = req.query.title;


      if (!title) {
        return res.status(400).json({ error: 'title query parameter is required' });
      }
  
      const limit = req.query.limit |15;
      const offset = (page - 1) * limit;
  
      const movies = await Movies.findAndCountAll({
        where: {
          title: {
            [Op.like]: `%${title}%`
          }
        },
        limit,
        offset
      });
      res.json({
        total: movies.count,
        pages: Math.ceil(movies.count / limit),
        currentPage: page,
        data: movies.rows
      });
    }
    catch(e){
      console.log(e)
      res.status(500).json({message:"error",e})
    }
  }

  module.exports={getMovieByCategorie,getMovies,searchMovieByName}