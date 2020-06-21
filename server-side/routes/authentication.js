'use strict';

const { Router } = require('express');
const router = new Router();
const User = require('./../models/user');

router.post('/createUser', (req, res, next) => {
  const { firstName, lastName, userType, email } = req.body;
  console.log(firstName, lastName, userType, email);
  User.create({
    firstName,
    lastName,
    userType,
    email,
  })
    .then((user) => {
      //   req.session.user = user._id;
      res.json({ user: user });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
