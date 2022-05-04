const User = require('../models/user');
const Recipe = require('../models/recipe')

module.exports = {
    index,
}

function index(req, res, next) {
    res.render('index', {
        user: req.user,
        name: req.query.name,
        title: 'Grrrumble'
    });
}