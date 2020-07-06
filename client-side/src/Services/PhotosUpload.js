import ImageKit from 'imagekit-javascript';

let imagekit = new ImageKit({
  publicKey: `${process.env.REACT_APP_IMAGEKIT_API_KEY}`,
  urlEndpoint: `${process.env.REACT_APP_IMAGEKIT_URLENDPOINT}`,
  authenticationEndpoint: `${process.env.REACT_APP_IMAGEKIT_AUTHENTICATIONENDPOINT}`,
});

const uploadToImagekit = (data) =>
  new Promise((resolve, reject) => {
    imagekit.upload(data, function (err, result) {
      if (!err) {
        resolve(result);
      } else {
        reject(err);
      }
    });
  });

const upload = async (fileList) => {
  const results = [];
  for (const file of fileList) {
    const result = await uploadToImagekit({
      file,
      fileName: file.name,
      folder: '/surf_pics_project/user_uploads',
    });
    console.log('results', result);
    results.push(result);
  }
  // return results;
  return results.map(({ url }) => url);
};

export { upload };
