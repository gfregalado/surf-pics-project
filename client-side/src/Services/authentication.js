import axios from 'axios';

const baseAuthenticationService = axios.create({
  baseURL: 'http://localhost:5000/api',
});

const createUser = (email, firstName, lastName, userType) => {
  baseAuthenticationService
    .post('/createUser', {
      email,
      firstName,
      lastName,
      userType,
    })
    .then(() => {
      console.log('USER CREATED SUCCESSFULLY');
    })
    .catch((error) => console.log(error));
};

export { createUser };
