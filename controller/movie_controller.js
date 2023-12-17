const { Movie } = require('../models');
const MovieRepositories = require('../repositories/movie_repositories.js');


class MovieController {
    static async getAll(req, res, next) {
        try {
            const data =  await MovieRepositories.getAll()
            res.status(200).json(data)
        } catch (error) {
            next(error);
        }
    }

    static async getOne(req, res, next) {
        try {
            const { id } = req.params;
            const parsedId = parseInt(id, 10); // Parse the id string to an integer
    
            const movie = await Movie.findByPk(parsedId);
            if (!movie) throw { name: 'notFound' };
    
            res.status(200).json(movie);
        } catch (err) {
            next(err);
        }
    }
    
    static async create(req, res, next) {
        try {
            const {name, category} = req.body
            const newMovie = await Movie.create({name, category})
            res.status(201).json(newMovie)
        } catch (error) {
            next(error);
        }
    }

    static async update(req, res, next) {
        try {
            const {id} = req.params;
            const {name, category} = req.body;
            const updateMovie = await Movie.update({name, category}, {where: {id}})
            res.status(200).json(updateMovie)
        } catch (error) {
            next(error);
        }
    }

    static async delete(req, res, next) {
        try {
            const {id} = req.params;
            await Movie.destroy({where: {id}})
            res.status(200).json({message: 'Movie deleted'})
        } catch (error) {
            next(error);
        }
    }

    static async uploadImage(req, res, next) {
        try {
            const { id } = req.params;

           
            const movie = await Movie.findByPk(id);
            if (!movie) throw { name: 'notFound' };

            // Update photo in db with the filename of the uploaded image
            movie.photo = req.file.filename;
            await movie.save();

            res.status(200).json({ message: 'Image uploaded' });
        } catch (err) {
            next(err);
        }
    }

}





module.exports = MovieController;