import { useNavigation, useRoute } from '@react-navigation/native';
import React ,{useEffect, useState}from 'react';
import { api, key, posterPath } from '../../services/api';

import {
    Container,
    Header,
    HeaderButton,
    BackHeader,
    FavoritesHeader,
    Banner,
    ButtonLink,
    IconLink,
    TitleMovie,
} from './styles';

interface IMovie{
    poster_path:string;
    title:string;
}


export const Details = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [movie, setMovie] = useState<IMovie>({} as IMovie);

    useEffect(()=>{
        let isActive  = true;
        const  getMovie = async ()=>{
            const response = await api.get(`/movie/${route.params?.id}`,{
                params:{
                    api_key:key,
                    language:'pt-BR'
                }
            }).catch((err)=>{
                console.log(err);
            });

            if (isActive) {
                setMovie(response.data);
                //console.log(response.data);
            }
        }
        if (isActive) {
            getMovie();
        }

        return ()=>{
            isActive  = false;
        }
        
    },[])

    return(
        <Container>
            <Header>
                <HeaderButton activeOpacity={0.8} onPress={()=> navigation.goBack()}>
                    <BackHeader 
                        name='arrow-left'
                    />
                </HeaderButton>
                <HeaderButton>
                    <FavoritesHeader 
                        name='bookmark'
                    />
                </HeaderButton>
            </Header>
            <Banner 
                resizeMode="cover"
                source={{uri:posterPath+movie.poster_path}} 
            />

            <ButtonLink>
                <IconLink name='link'/>
            </ButtonLink>

            <TitleMovie numberOfLines={2}>{movie.title}</TitleMovie>
        


        </Container>
    );
}