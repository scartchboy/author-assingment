const router = require('express').Router()

router.use('/auth', require('./authentication.route'));
router.use('/book', require('./book.route'));

module.exports = router
