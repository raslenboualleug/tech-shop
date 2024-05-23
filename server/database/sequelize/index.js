const { Sequelize, DataTypes } = require("sequelize");


// Create a database connection
const connection = new Sequelize(
  
   "shopify",
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
  // connection
  // .sync()
  // .then(() => {
  //   console.log("Tables created successfully!");
  // })
  // .catch((error) => {
  //   console.error("Unable to create tables:", error);
  // });

  const Product = connection.define('Product', {
    name: 
    { type: DataTypes.STRING,
       allowNull: false },
    price: 
    { type: DataTypes.FLOAT, 
      allowNull: false },
    category: 
    { type: DataTypes.STRING, 
      allowNull: false },
    description: 
    { type: DataTypes.TEXT,
       allowNull: false },
    image: 
    { type: DataTypes.STRING,
       allowNull: true }
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

const Order= connection.define("order",{
  

  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  total: {
    type: DataTypes.FLOAT,
    allowNull: false
  }

})


user.hasMany(Product)
Product.belongsTo(user)
user.hasOne(Order)
Order.belongsTo(user)




module.exports = {Product,connection,user};
