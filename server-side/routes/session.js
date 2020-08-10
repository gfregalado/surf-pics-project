'use strict';

const { Router } = require('express');
const router = new Router();

const Session = require('./../models/session');

router.post('/session', (req, res, next) => {
  console.log('BODY', req.body.Watersports);
  const {
    user,
    country,
    spot,
    date,
    period,
    Watersports,
    imagesUrls,
  } = req.body;

  Session.create({
    user,
    country,
    spot,
    date,
    period,
    Watersports,
    imagesUrls,
  })
    .then((session) => {
      res.json({ session });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
