import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'd00b37e84ed6e97cb83d75bf12242e4f',
    language: 'ko-KR'
  }
});

export default instance;
