const axios = require('axios');
const somaDoisNumeros = (a, b) => a+b;
const pegaPost = async (postNumber)=> await axios.get(`https://jsonplaceholder.typicode.com/posts/${postNumber}`);

const api = {
  somaDoisNumeros,
  pegaPost
}

module.exports = api;