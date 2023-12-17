const { Movie } = require('../models');

class MovieRepositories {
    static async getAll() {
        try {
            const data =  await Movie.findAll();
            return data
        } catch (error) {
            throw error;
        }
    }

}

module.exports = MovieRepositories;