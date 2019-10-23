const jwt = require('jsonwebtoken');
const {secret} = require('./../middleware')
const models = require('../models');
const User = models.users;

//Login
exports.signIn = (req, res) => {
  const email = req.body.email;
  const password = req.body.password; //

  User.findOne({where: {email, password}}).then(user => {
    if (user) {
      const token = 'Bearer ' + jwt.sign({userId: user.id}, secret);
      res.send({
        data: user,
        token,
      });
    } else {
      res.send({
        error: true,
        message: 'wrong email or password',
      });
    }
  })
};
//
//Register
exports.signUp = (req, res) => {
  const {email} = req.body;
  User.findOne({where: {email}}).then(user => {
    if (user) {
      res.send({
        error: true,
        message: 'Email Sudah Terdaftar',
      });
    } else {
      User.create(req.body).then(item => {
        const token = 'Bearer ' + jwt.sign({userId: item.id}, secret);
        res.send({
          data: item,
          token,
        });
      });
    }
  });
};
