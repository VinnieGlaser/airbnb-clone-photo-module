const results = require('./data/listing100.json');

const axios = {
  get(url) {
    return new Promise((resolve, reject) => {
      url
      ? resolve({data: results })
      : reject(new Error('Invalid URL'));
    });
  },
};

export default axios;
