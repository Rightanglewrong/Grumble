var express = require('express');
var router = express.Router();
const profileCtrl = require('../controllers/profile')

// Get User Page
router.get('/profile/:id', profileCtrl.show)
// Add Recipe to User Page
router.post('/profile/:id/recipes', profileCtrl.addToWL)

module.exports = router;