let ImageKit = require('imagekit');

const { Router } = require('express');
const router = new Router();

router.get('/imageauth', (req, res, next) => {
  let imagekit = new ImageKit({
    publicKey: `${process.env.IMAGEKIT_API_KEY}`,
    privateKey: `${process.env.IMAGEKIT_PRIVETE_KEY}`,
    urlEndpoint: `${process.env.IMAGEKIT_URLENDPOINT}`,
  });
  let authenticationParameters = imagekit.getAuthenticationParameters();

  res.json(authenticationParameters);
  return authenticationParameters;
});

module.exports = router;
