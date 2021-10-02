/**============================================
 *       Gerar lista do tamanho desejavel
 *=============================================**/
const getListMovies = (size: number,movies: any[])=>{
    let popularMovies = [];

    for (let i=0, l=size ; i < l ; i++) {
        popularMovies.push(movies[i]);
        
    }
    return popularMovies;
}

/**
 *  Gerar um numero aleatorio 
 *  com base no tamanho da lista 
 *  de filmes que eu passar
 **/
const randomBanner = (movies:any[])=>{
    return Math.floor(Math.random()* movies.length);
}

export {getListMovies,randomBanner}