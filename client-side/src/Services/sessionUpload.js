import axios from 'axios';

const baseAuthenticationService = axios.create({
  baseURL: 'http://localhost:2000/api',
});

const uploadSession = (session) => {
  console.log(session);
  return baseAuthenticationService
    .post('/session', session)
    .then((response) => {
      console.log(response);
      return Promise.resolve();
    })
    .catch((error) => {
      console.log(error);
      return Promise.reject(error);
    });
};

export { uploadSession };
