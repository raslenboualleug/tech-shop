const express=require('express')
const {createUser,login,getAllUsers,getOneUser}=require('./control')


const router =express.Router()
router.post('/create',createUser)
router.post('/login',login)
router.get('/get',getAllUsers)
router.get('/:userid',getOneUser)
module.exports=router