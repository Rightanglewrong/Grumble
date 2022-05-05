const User = require('../models/user');
const Recipe = require('../models/recipe');
const mongoose = require('mongoose')

module.exports = {
    index,
}

function index(req, res, next) {
    res.render('index', {
        name: req.query.name,
        title: 'Grrrumble'
    });
}

