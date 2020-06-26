const upload = (body) => {
  const form = new FormData();
  form.append('location', body.name);
  form.append('sport', body.sport);
  form.append('date', body.date);
  form.append('period', body.period);
  form.append('photos', body.photos);

  console.log(form);
  //   return baseAuthenticationService
  //     .post('/uploadphotos', form)
  //     .then((response) => {
  //       const data = form
  //       // const user = data.user;
  //       console.log(Promise.resolve(data));
  //     })
  //     .catch((error) => {
  //       console.log(Promise.reject(data));
  //     });
};

export { upload };
