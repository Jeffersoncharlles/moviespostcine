import { useNavigation, useRoute } from '@react-navigation/native';
import React ,{useEffect, useState}from 'react';
import { api, key, posterPath } from '../../services/api';
import Stars from 'react-native-stars';
import { Genres } from '../../components/Genres';

import {
    Container,
    Header,
    HeaderButton,
    BackHeader,
    FavoritesHeader,
    Banner,
    BannerLinear,
    ButtonLink,
    IconLink,
    TitleMovie,
    ContainerArea,
    IconStar,
    IconStarEmpty,
    IconHalfStar,
    Rate,
    ListGeneral,
    OverviewScroll,
    Description
} from './styles';


interface IMovie{
    poster_path:string;
    title:string;
    genres:{
        id:number;
        name:string;
    }[];
    overview:string;
    release_date:string;
    vote_average:number;
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
        
            <ContainerArea>
                <Stars 
                    default={movie.vote_average}
                    count={10}
                    half={true}
                    starSize={20}
                    fullStar={<IconStar name="md-star" />}
                    emptyStar={<IconStarEmpty name="md-star-outline" />}
                    halfStar={<IconHalfStar name="md-star-half" />}
                    disable={true}
                />
                <Rate>{movie.vote_average}/10</Rate>
            </ContainerArea>
            <ListGeneral 
                data={movie?.genres}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item)=>String(item.id)}
                renderItem={({item})=>(
                    <Genres data={item}/>
                )}
            />
            <OverviewScroll showsVerticalScrollIndicator={false}>
                    <TitleMovie>Descrição</TitleMovie>
                    <Description>{movie.overview}</Description>
            </OverviewScroll>

        </Container>
    );
}