import React,{useEffect,useState} from 'react';
import { FavoriteItem } from '../../components/FavoriteItem';
import { Header } from '../../components/Header';
import { getMoviesSave } from '../../utils/storage';

import {
    Container,
    ListMyMovies
} from './styles';

export const Movies = () => {
    const [myMovies,setMyMovies] = useState([]);

    const name = 'Meus Filmes'
    const iconNames = 'menu'

    

    useEffect(()=>{
        let isActive = true;

        const getFavoriteMovies = async ()=>{
            const result = await getMoviesSave('@moviescine');

            if (isActive) {
                setMyMovies(result);
            }
        }

        if (isActive) {
            getFavoriteMovies();
        }

        return ()=>{
            isActive = false;
        }

    },[]);

    return(
        <Container>
            <Header title={name} iconName={iconNames} />

            <ListMyMovies 
                data={myMovies}
                keyExtractor={(item)=> String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({item})=>(
                    <FavoriteItem  data={item}/>
                )}
            
            
            />
        </Container>
    );
}