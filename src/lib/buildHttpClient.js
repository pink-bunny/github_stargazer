import Axios from 'axios';

const buildHttpClient = () => {
  const instance = Axios.create({
    baseURL: 'https://api.github.com',
    headers: {
      common: {},
    },
  });

  return instance;
};

export default buildHttpClient;
