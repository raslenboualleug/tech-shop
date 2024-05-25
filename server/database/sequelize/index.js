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
////////////////////////////////*
connection
.sync()
.then(() => {
  console.log("Tables created successfully!");
})
.catch((error) => {
  console.error("Unable to create tables:", error);
});
////////////////////////////////*

connection.authenticate()
  .then(() => {
    console.log("Database connected.");
  })
  .catch((error) => {
    console.error("Failure connecting the database:", error);
  });
  
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
  
  products: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  total: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
    
})

user.hasMany(Order,{foreignKey: 'userId'});
  Order.belongsTo(user,{foreignKey: 'userId'})
module.exports = {Product,connection,user,Order};
