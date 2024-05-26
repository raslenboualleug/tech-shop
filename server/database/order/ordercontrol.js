const { Order, Product, user } = require('../sequelize/index');

// create a new order
exports.createOrder = (req, res) => {
  const { userId, products, totalPrice } = req.body;

  Order.create({ userId, products, totalPrice })
    .then(order => res.status(201).json(order))
    .catch(error => res.status(400).json({ error: error.message }));
};

