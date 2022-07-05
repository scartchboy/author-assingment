const routes = require('express').Router()
const { registerPublisher,loginPublisher, registerAuthor, loginAuthor,allUser} = require('../bussiness_logic/authentication')


routes.post('/user/loginPublisher',loginPublisher)
routes.post('/user/registerPublisher', registerPublisher)

routes.post('/user/registerAuthor', registerAuthor)
routes.post('/user/loginAuthor',loginAuthor)

routes.get('/allUsers',allUser)

routes.get('/user/get',(req,res)=>{
    res.send({"message":"getting"});
})



module.exports = routes
