const express = require('express');
const { createOrder, updateOrder } = require('../order/ordercontrol');
const router = express.Router();

router.post('/create', createOrder);


module.exports = router;
