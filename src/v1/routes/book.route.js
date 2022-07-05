const routes = require('express').Router()
const { uploadBook,getAllBooks,getAuthorBooks } = require('../bussiness_logic/book')

routes.post('/uploadBook', uploadBook)
routes.get('/getAllBooks', getAllBooks)
routes.get('/getAuthorBooks', getAuthorBooks)
module.exports = routes