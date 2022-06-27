import axios from 'axios';

const url = ' http://localhost:3001/users';
const url2 = ' http://localhost:3001/post';

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
  createPost: (data, token) => {
    return axios.post(`${url2}/${token}`, data);
  },
  getPost: () => {},
};

export default API;
