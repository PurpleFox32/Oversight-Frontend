import axios from 'axios';

const url = ' http://localhost:3001/Users'

const API = {
    createUser: (user) => {
      return axios.post(url, user)
    }, 
    getOneById: (id) => {
        return axios.get(`${url}/${id}`)
    },
  
}

export default API;