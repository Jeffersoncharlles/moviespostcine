
import React,{ useEffect , useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {ActivityIndicator} from 'react-native';
import { useTheme } from 'styled-components';
import { api, key } from '../../services/api';


import {
    Container,
    FlatListMovies,
    ContainerActive
} from './styles';
import { SearchItem } from '../../components/SearchItem';

interface ISearch{
    results:{
        title:string;
        vote_average:number;
        poster_path:string;
        backdrop_path:string
    }[];
    
}

export const Search = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const theme = useTheme();
    const queryName = route?.params?.name;
    

    const [movie,setMovie] = useState([]);
    const [loading,setLoading] = useState(true);
    

    useEffect( () => {
        let isActive = true;

        const getSearchMovie = async ()=>{

            const response = await api.get(`/search/movie`,{
                params:{
                    api_key:key,
                    language:'pt-BR',
                    query:queryName,
                    page:1,
                }
            }).catch((err)=>{
                console.log(err);
            });
            if (isActive) {
                setMovie(response.data.results);
                setLoading(false); 
            }
        }
        
        if (isActive) {
            getSearchMovie();   
        }   

        return () => {
            isActive = false;
        }

    },[]);

    const navigateDetailsPage =(movie)=>{
        navigation.navigate('Details',{id: movie.item.id});
    }

    if (loading) {
        return(
            <ContainerActive>
                <ActivityIndicator  size='large' color={theme.colors.success}/>
            </ContainerActive>
        )
    }

    return(
        <Container>
            <FlatListMovies 
                data={movie}
                showsVerticalScrollIndicator={false}
                keyExtractor={({id})=>String(id)}
                renderItem={(item)=>(
                    <SearchItem  data={item} navigatePage={()=>navigateDetailsPage(item)}/>
                )}
            
            />
        </Container>
    );
}