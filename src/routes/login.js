const express = require('express');
const loginController = require('../controllers/loginController');


const router = express.Router();

router.get('/login', loginController.login);
router.post('/login', loginController.auth);
router.get('/register', loginController.register);
router.post('/register', loginController.rhUser);
router.get('/logout', loginController.logout);

module.exports = router;