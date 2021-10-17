import * as axios from 'axios';

const URL =
  'https://ipo-cp.ru/api/v1/bootcamps/605c5f71bc557b46b4f42a56/courses';

export const api = {
  getData: async () => {
    const response = await axios.get(URL);
    return response.data;
  },
};
