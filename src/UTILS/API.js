import axios from 'axios';

const url = ' http://localhost:3001/users';

const API = {
  createUser: (user) => {
    return axios.post(url, user);
  },
  getOneById: (id) => {
    return axios.get(`${url}/${id}`);
  },
  getOneByUsername: (user) => {
    return axios.post(`${url}/login`, user);
  },
  getUserData: (token) => {
    return axios.post(`${url}/profile`, token);
  },
};

export default API;
