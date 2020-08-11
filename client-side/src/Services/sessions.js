import axios from 'axios';

const baseApiService = axios.create({
  baseURL: 'http://localhost:2000/api',
});

const uploadSession = (session) => {
  console.log(session);
  return baseApiService
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

const listSessions = () => {
  return baseApiService
    .get('/session')
    .then((response) => {
      const data = response.data.sessions;

      return Promise.resolve(data);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

export { uploadSession, listSessions };
