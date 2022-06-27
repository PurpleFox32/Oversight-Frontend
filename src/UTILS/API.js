import axios from 'axios';

const url = ' http://localhost:3001/users';
const url2 = ' http://localhost:3001/post';
const url3 = 'http://localhost3001/games';

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
  // userPost: (token) => {
  //   return axios.get(`${url2}/${token}`);
  // },
  createPost: (data, token) => {
    return axios.post(`${url2}/${token}`, data);
  },
  getPost: () => {},
  // getGameList: (games) => {
  //   return axios.get(`${url3}/list`, games);
  // },
};

export default API;
