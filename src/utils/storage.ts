import AsyncStorage from '@react-native-async-storage/async-storage';

/* BUSCAR OS FILMES SALVOS */
const getMoviesSave = async (key:string)=>{
    const myMovies: any = await AsyncStorage.getItem(key);

    let moviesSave = JSON.parse(myMovies) || [];
    return moviesSave;
}


/* SALVAR UM NOVO FILMES */
const salveMove = async (key:string,newMovie: any)=>{
    let moviesStored: any = await getMoviesSave(key);


    /* se tiver algum filme salvo como esse mesmo id / precisamos ignorar ele retorna true ou false*/
    const  hasMovie = moviesStored.some((item:any) => item.id === newMovie.id);
    
    if (hasMovie) {
        return;
    }

    moviesStored.push(newMovie);

    await AsyncStorage.setItem(key,JSON.stringify(moviesStored));
}

/* DELETAR ALGUM FILME */
const deleteMovie = async (id:any)=>{
    let moviesStored: any = await getMoviesSave('@moviescine');

    let myMovies = moviesStored.filter((item:any)=>{
        return (item.id !== id)
    });

    await AsyncStorage.setItem('@moviescine',JSON.stringify(myMovies));

    return myMovies;

}

/* FILTRAR ALGUM FILME SE JA ESTA SALVO */
const hasMovieFilter = async(movie:any)=>{
    let moviesStored: any = await getMoviesSave('@moviescine');

    const hasMovie = moviesStored.find((item:any)=>item.id === movie.id);

    if (hasMovie) {
        return true;
    }

    return false;
}



export {getMoviesSave,salveMove,deleteMovie,hasMovieFilter}