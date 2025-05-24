import axios from 'axios';

export const login = async (username, password) => {
  return await axios.post('http://localhost:5000/api/login', {
    username,
    password,
  });
};
