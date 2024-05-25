const { user } = require("../sequelize/index")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config();
//sign in for the users
const createUser = (req, res) => {
  const { username, email, password } = req.body;


  bcrypt.hash(password, 10)
    .then(hashedPassword => {

      return user.create({
        username,
        email,
        password: hashedPassword
      });
    })
    .then(user => res.status(201).json(user))
    .catch(error => res.status(400).json({ error: error.message }));
};

//login

const login = (req, res) => {
  console.log('JWT Secret:', process.env.ACCESS_TOKEN_SECRET);

  const { email, password } = req.body;

  user.findOne({ where: { email: email } })
    .then(user => {
      if (!user) {
        return res.status(400).send('Invalid email or password');
      }

      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (!isMatch) {
            return res.status(400).send('Invalid email or password');
          }

          const token = jwt.sign({ id: user.id }, process.env.ACCESS_TOKEN_SECRET);
          res.json({ token,user:user.toJSON() });
        })
        .catch(err => {
          console.error('Error comparing passwords:', err);
          res.status(500).send('Internal server error');
        });
    })
    .catch(error => {
      console.error('Error finding user:', error);
      res.status(500).send('Internal server error');
    });
};





const getAllUsers = (req, res) => {
  user.findAll()
    .then(users => res.json(users))
    .catch(error => {
      console.error(error);
    });
}

const getOneUser = (req, res) => {
  const userId = req.params.id;

  user.findOne({ where: { id: userId } })
    .then(user => {
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(user);
    })
    .catch(error => {
      console.error('somthing went wrong', error);
      res.status(500).json({ error: 'Internal server error' });
    });
};





module.exports = {
  createUser,
  login,
  getAllUsers,
  getOneUser
}