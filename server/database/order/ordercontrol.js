const {Order,user}=require('../sequelize/index');
const { get } = require('./orderoutes');

const getOrder=(req,res)=>{
  const OrderId = req.params.orderId;
  Order.findByPk(OrderId,{include:user})
  .then (order=>{
    if (!order){
      res.status(404).send('order not found')
    }
    res.json(order)
  })
  .catch(error=>{
    console.error(error)
    res.status(500).send("error finding order")
  })
}

const getAllOrders=(req,res)=>{
  Order.findAll()
  .then(orders=> res.json(orders))
  .catch(error => {
    console.error(error);
    res.status(500).send("Error fetching orders");
});
}

const addOrder=(req,res)=>{
  const newOrder=req.body
  Order.create(newOrder)
  .then(order=>{
    res.status(201).send({ message: "Order created successfully", orderId: order.id })
  })
  .catch(error => {
    console.error(error);
    res.status(500).send("Error adding order");
});
}
module.exports={
  addOrder,
  getAllOrders,
  getOrder
}