// August 9, 2018

const router = module.exports = require('express').Router();
router.use('/login', require('./login').router);
router.use('/signup', require('./signup').router);
