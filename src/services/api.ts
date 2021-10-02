import axios from 'axios';

/**============================================
 *URL FILMES EM CARTAZ          TODO HEADER
 *https://api.themoviedb.org/3/movie/now_playing?api_key=API&language=pt-BR&page=1
 *=============================================**/

const key = '660709e57868ca59f65c23440f729164';
const posterPath = 'https://image.tmdb.org/t/p/original';

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3'
});

export {api, key,posterPath}