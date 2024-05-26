const express = require("express");
const cors = require("cors");
const PORT = 3000;
const app = express();

app.use(express.json());

app.use(cors());
//user routes
const userRoutes=require('../server/database/user/routes')
app.use('/users',userRoutes)
const productRoutes=require('./database/products/prodrouts')

app.use('/products',productRoutes)

const orderRoutes = require('./database/order/orderoutes');
app.use('/orders', orderRoutes);


app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
