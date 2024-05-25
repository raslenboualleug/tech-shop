const express= require('express');
const {addOrder,getAllOrders,getOrder}=require('./ordercontrol');
 
const router=express.Router() ;

router.post('/add',addOrder)
router.get('/orderId',getOrder)
router.get('/orders',getAllOrders)


module.exports=router 