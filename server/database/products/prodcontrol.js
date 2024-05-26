const { Product } = require('../sequelize/index');

getAllProducts = (req, res) => {
  Product.findAll()
    .then(products => res.json(products))
    .catch(error => res.status(400).json({ error: error.message }));
};

getProductById = (req, res) => {
  const { id } = req.params;
  Product.findByPk(id)
    .then(product => {
      if (product) {
        res.json(product);
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
    })
    .catch(error => res.status(400).json({ error: error.message }));
};

createProduct = (req, res) => {
  const { name, price, category, description, image } = req.body;
  Product.create({ name, price, category, description, image })
    .then(product => res.status(201).json(product))
    .catch(error => res.status(400).json({ error: error.message }));
};

updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, price, category, description, image } = req.body;
  Product.update({ name, price, category, description, image }, { where: { id } })
    .then(([rowsUpdate]) => {
      if (rowsUpdate > 0) {
        res.json({ message: 'Product updated successfully' }); 
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
    })
    .catch(error => res.status(400).json({ error: error.message }));
};

deleteProduct = (req, res) => {
  const { id } = req.params;
  Product.destroy({ where: { id } })
    .then(rowsDeleted => {
      if (rowsDeleted > 0) {
        res.json({ message: 'Product deleted successfully' });
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
    })
    .catch(error => res.status(400).json({ error: error.message }));
};


module.exports={
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
}