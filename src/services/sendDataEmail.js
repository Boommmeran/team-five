import axios from 'axios';

export const sendDataEmail = async data => {
  await axios.post('/support', data);
};
