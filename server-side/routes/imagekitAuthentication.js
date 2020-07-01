let ImageKit = require('imagekit');
let fs = require('fs');

const { Router } = require('express');
const router = new Router();

// console.log(authenticationParameters);

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

// var ImageKit = require('imagekit');
// var fs = require('fs');
// // const { router } = require('../app');

// var imagekit = new ImageKit({
//   publicKey: `${process.env.IMAGEKIT_API_KEY}`,
//   privateKey: `${process.env.IMAGEKIT_PRIVETE_KEY}`,
//   urlEndpoint: `${process.env.IMAGEKIT_URLENDPOINT}`,
// });

// router.post('/imgpost', (req, res, next) => {
//   //   console.log(req);
//   imagekit.upload(
//     {
//       file: base64, //required
//       fileName: 'my_file_name.jpg', //required
//       tags: ['tag1', 'tag2'],
//     },
//     function(error, result) {
//       if (error) console.log(error);
//       else console.log(result);
//     }
//   );
// });

// fs.readFile('image.jpg', function(err, data) {
//   if (err) throw err; // Fail if the file can't be read.
//   imagekit.upload(
//     {
//       file: data, //required
//       fileName: 'my_file_name.jpg', //required
//       tags: ['tag1', 'tag2'],
//     },
//     function(error, result) {
//       if (error) console.log(error);
//       else console.log(result);
//     }
//   );
// });

module.exports = router;
