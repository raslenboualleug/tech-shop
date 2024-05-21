const { Sequelize, DataTypes } = require("sequelize");


// Create a database connection
const connection = new Sequelize(
  
   "myshop",
  "root",
   "root",
  {
    host: "localhost",
    dialect: "mysql",
  }
)

connection.authenticate()
  .then(() => {
    console.log("Database connected.");
  })
  .catch((error) => {
    console.error("Failure connecting the database:", error);
  });
const Product = connection.define("Product", {

  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
  
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  //add categorie
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false
  },
  categorie:{
    type: DataTypes.STRING,
    allowNull: false
  }
});
const user=connection.define("user", {
  username: {
    type: DataTypes.STRING,
   
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },

}
)
const order= connection.define("order",{
  

  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  total: {
    type: DataTypes.FLOAT,
    allowNull: false
  }

})
user.hasOne(Product)

 



module.exports = {Product,connection,user};
