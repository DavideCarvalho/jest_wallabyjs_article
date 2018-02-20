// @flow
const axios = require('axios');
const somaDoisNumeros = (a: number, b:number): number => a+b;
const pegaPost = async (postNumber: number): AxiosPromise<PostType> => await axios.get(`https://jsonplaceholder.typicode.com/posts/${postNumber}`);

const api: ApiType = {
  somaDoisNumeros,
  pegaPost
}

module.exports = api;