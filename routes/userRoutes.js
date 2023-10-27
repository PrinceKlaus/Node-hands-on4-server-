const { register, login } = require('../controller/userFunc')

const userRouter =require('express').Router()

userRouter.post('/register',register)

userRouter.post('/login',login)

module.exports=userRouter;