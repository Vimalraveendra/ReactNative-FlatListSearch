import axios from 'axios';

const url = 'https://randomuser.me/api/?&nat=gb&results=20';

export const fetchData = async () => {
  try {
    const response = await axios.get(url);
    const res = response.request._response;
    return res;
  } catch (error) {}
};
