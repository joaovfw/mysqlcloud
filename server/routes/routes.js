module.exports = app => {
    const bodyParser = require('body-parser');
    const Db = require('../database/db');
    
    app.get('/', (require, response) => {
        response.json({message: 'catálogo de séries e filmes'})
    })

    app.get('/movies', (require, response) => {
        const sql = "select * from movies";
        Db.query(sql, (error, res) => {
            if (error){
                return error;
            } console.log("movies: ", res);
            response.json(res)
        })
    })
};





