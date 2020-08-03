// 'use strict';

// const { Router } = require('express');
// const router = new Router();
// const User = require('./../models/user');

// router.post('/createUser', (req, res, next) => {
//   const { firstName, lastName, userType, email } = req.body;
//   console.log(firstName, lastName, userType, email);
//   User.create({
//     firstName,
//     lastName,
//     userType,
//     email,
//   })
//     .then((user) => {
//       //   req.session.user = user._id;
//       res.json({ user: user });
//     })
//     .catch((error) => {
//       next(error);
//     });
// });

// module.exports = router;

'use strict';

const { Router } = require('express');
const router = new Router();

const bcryptjs = require('bcryptjs');
const User = require('./../models/user');

router.post('/sign-up', (req, res, next) => {
  const { firstName, lastName, userType, email, password } = req.body;
  bcryptjs
    .hash(password, 10)
    .then((hash) => {
      return User.create({
        firstName,
        lastName,
        userType,
        email,
        passwordHash: hash,
      });
    })
    .then((user) => {
      req.session.user = user._id;
      res.json({ user });
    })
    .catch((error) => {
      next(error);
    });
});

router.post('/sign-in', (req, res, next) => {
  let user;
  const { email, password } = req.body;
  User.findOne({ email })
    .then((document) => {
      if (!document) {
        return Promise.reject(new Error("There's no user with that email."));
      } else {
        user = document;
        return bcryptjs.compare(password, user.passwordHash);
      }
    })
    .then((result) => {
      if (result) {
        req.session.user = user._id;
        res.json({ user });
      } else {
        return Promise.reject(new Error('Wrong password.'));
      }
    })
    .catch((error) => {
      next(error);
    });
});

router.post('/sign-out', (req, res, next) => {
  req.session.destroy();
  res.json({});
});

module.exports = router;
