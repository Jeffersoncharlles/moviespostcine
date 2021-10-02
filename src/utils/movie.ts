/**============================================
 *       Gerar lista do tamanho desejavel
 *=============================================**/
const getListMovies = async (size: number,movies: any)=>{
    let popularMovies = [];

    for (let index = 0; index = size ; index++) {
        popularMovies.push(movies[index]);
        
    }

    return popularMovies;
}

export {getListMovies}