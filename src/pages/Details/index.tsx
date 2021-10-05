import { useNavigation, useRoute } from '@react-navigation/native';
import React ,{useEffect, useState}from 'react';
import Stars from 'react-native-stars';
import { api, key, posterPath } from '../../services/api';


import { Genres } from '../../components/Genres';
import { getListMovies } from '../../utils/movie';
import { Cast } from '../../components/Cast';
import { ModalLink } from '../../components/ModalLink';

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
    Description,
    ListCast,
    ModalView
} from './styles';
import { hasMovieFilter, salveMove ,deleteMovie} from '../../utils/storage';



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
    homepage:string;
}


export const Details = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [movie, setMovie] = useState<IMovie>({} as IMovie);
    const [cast, setCast] = useState({});
    const [openLink, setOpenLink] = useState(false);
    const [favoritesMovies, setFavoritesMovies] = useState(false);

    const handleFavoriteMovie = async (movie:any)=>{
        if (favoritesMovies) {
            await deleteMovie(movie.id);
            setFavoritesMovies(false);
        }else{
            await salveMove('@moviescine',movie);
            setFavoritesMovies(true);
        }
        
    }

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

                const isFavorite = await hasMovieFilter(response.data);
                    setFavoritesMovies(isFavorite);
                
                //console.log(response.data);
            }
           
        }
        const  getCast = async ()=>{
            const response = await api.get(`/movie/${route.params?.id}/credits`,{
                params:{
                    api_key:key,
                    language:'pt-BR'
                }
            }).catch((err)=>{
                console.log(err);
            });

            if (isActive) {
                const nowList = getListMovies(5,response.data.cast);
                // console.log(nowList);
                setCast(nowList);
            }
           
        }
        if (isActive) {
            getMovie();
            getCast();
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
                <HeaderButton onPress={()=>handleFavoriteMovie(movie)}>
                    {favoritesMovies ? (
                        <FavoritesHeader 
                            name='bookmark'
                        />
                    ):(
                        <FavoritesHeader 
                            name='bookmark-outline'
                        />
                    )
                    }
                </HeaderButton>
            </Header>
            
            <Banner 
                resizeMode="cover"
                source={{uri:posterPath+movie.poster_path}} 
            />

            <ButtonLink onPress={()=>setOpenLink(true)}>
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

                    <TitleMovie>Cast</TitleMovie>
                    <ListCast  
                        data={cast}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item)=>String(item.id)}
                        renderItem={({item})=>(
                            <Cast data={item}/>
                        )}
                    />
            </OverviewScroll>

            <ModalView animationType="slide" transparent={true} visible={openLink}>
                    <ModalLink 
                        link={movie?.homepage}
                        title={movie?.title}
                        closeModal={()=>setOpenLink(false)}
                    
                    />
            </ModalView>

        </Container>
    );
}