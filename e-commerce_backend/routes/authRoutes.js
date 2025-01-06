const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { register, login } = require('../controllers/authController');
const router = express.Router();

router.post('/register', (req, res) => res.send('Register route'));
router.post('/login', (req, res) => res.send('Login route'));

module.exports = router;
