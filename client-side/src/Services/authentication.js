import axios from 'axios';

const baseAuthenticationService = axios.create({
  baseURL: 'http://localhost:2000/authentication',
});

const signUp = (firstName, lastName, userType, email, password) => {
  return baseAuthenticationService
    .post('/sign-up', {
      firstName,
      lastName,
      userType,
      email,
      password,
    })
    .then((response) => {
      const data = response.data;
      const user = data.user;
      return Promise.resolve(user);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

export { signUp };
