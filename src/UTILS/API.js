import axios from 'axios';

const url = ' http://localhost:3001/users';

const API = {
  createUser: (user) => {
    return axios.post(`${url}/signup`, user);
  },
  getOneById: (id) => {
    return axios.get(`${url}/${id}`);
  },
  getOneByUsername: (user) => {
    return axios.post(`${url}/login`, user);
  },
  getUserData: (token) => {
    return axios.get(`${url}/profile/${token}`);
  },
};

export default API;
