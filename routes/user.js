const express = require('express');
const router = express.Router();
const user = require('../controllers/user');
const helpAuth = require('../helper/jwt')

router.post('/api/signup', user.register);
router.post('/api/signin', user.login);
router.get('/api/users', user.all)
