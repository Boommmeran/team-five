import axios from 'axios';
import toast from 'react-hot-toast';

export const sendDataEmail = async data => {
  try {
    await axios.post('/support', data);
    toast.success('Successfully sent!');
  } catch (error) {
    toast.error('Oops. Something went wrong.');
  }
};
