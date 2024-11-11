const express = require('express');
const { register, login, getProfile } = require('../controllers/auth');
const { registerValidation, loginValidation, validate } = require('../validators/authValidators');

const authMiddleware = require('../middleware/auth');
const router = express.Router();

router.post('/register', registerValidation, validate, register);

router.post('/login', loginValidation, validate, login);

router.get('/profile', authMiddleware, getProfile);


module.exports = router;
