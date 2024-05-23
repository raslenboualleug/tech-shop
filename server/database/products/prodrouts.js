const express = require('express');
const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../products/prodcontrol');
const router = express.Router();

router.get('/get', getAllProducts);
router.get('/:id', getProductById);
router.post('/create', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
