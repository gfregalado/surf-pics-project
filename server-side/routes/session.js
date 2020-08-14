'use strict';

const { Router } = require('express');
const router = new Router();

const Session = require('./../models/session');

// Post Sessions

router.post('/session', (req, res, next) => {
  console.log('BODY', req.body.Watersports);
  const {
    user,
    country,
    spot,
    date,
    period,
    watersports,
    imagesUrls,
  } = req.body;

  Session.create({
    user,
    country,
    spot,
    date,
    period,
    watersports,
    imagesUrls,
  })
    .then((session) => {
      res.json({ session });
    })
    .catch((error) => {
      next(error);
    });
});

// Get Sessions

router.get('/session', (req, res, next) => {
  Session.find()
    .sort({ date: -1 })
    .limit(8)
    .then((sessions) => {
      console.log(sessions);
      res.json({
        sessions: sessions,
      });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
