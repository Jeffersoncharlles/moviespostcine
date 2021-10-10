import axios from 'axios';

const {KEY_API} = process.env;

/**============================================
 *URL FILMES EM CARTAZ          TODO HEADER
 *https://api.themoviedb.org/3/movie/now_playing?api_key=API&language=pt-BR&page=1
 *=============================================**/

const key = KEY_API;
const posterPath = 'https://image.tmdb.org/t/p/original';
const posterPath2 = 'https://image.tmdb.org/t/p/w500';

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3'
});

export {api, key,posterPath,posterPath2}