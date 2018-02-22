const axios = require('axios');
const somaDoisNumeros = (a, b) => a+b;
const pegaPost = async (postNumber)=> {
  const apiResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postNumber}`);
  return apiResponse.data.body.split('').reverse().join('');
}

const api = {
  somaDoisNumeros,
  pegaPost
}

module.exports = api;