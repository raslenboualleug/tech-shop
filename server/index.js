const express = require("express");
const cors = require("cors");
const PORT = 3000;
const app = express();

//midlwairs
app.use(express.json());
app.use(cors());
//user routes
const userRoutes=require('../server/database/user/routes')
app.use('/users',userRoutes)




app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
