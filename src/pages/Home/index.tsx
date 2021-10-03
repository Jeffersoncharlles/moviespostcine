import React,{useEffect,useState} from 'react';

import { ScrollView ,ActivityIndicator} from 'react-native';

import {
    Container,
    SearchContainer,
    SearchInput,
    SearchButton,
    SearchIcon,
    Title,
    BannerButton,
    Banner,
    SliderMovie,
} from './styles';

import { Header } from '../../components/Header';
import { SliderItem } from '../../components/SliderItem';
import { api, key, posterPath } from '../../services/api';
import { getListMovies,randomBanner } from '../../utils/movie';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/core';
import MovieDTO from '../../services/dtoMovies';

interface IMovies{
    title:string;
    poster_path:string;
    release_date:string;
    vote_average:number;
    vote_count:number;
    overview:string;
}
interface IMoviesInterface{
    movie:MovieDTO[];
}

export const Home = () => {
    const [nowMovies, setNowMovies] = useState<IMoviesInterface[]>([]);
    const [popularMovies, setPopularMovies] = useState<IMovies[]>([]);
    const [topMovies, setTopMovies] = useState<IMovies[]>([]);
    const [loading,setLoading] = useState(true);
    const [bannerMovie,setBannerMovie] = useState({});
    const [searchInput,setSearchInput] = useState('');
    const navigation = useNavigation();

    const name = 'Movies Poster Cine'
    const iconNames = 'menu'

    const theme = useTheme();

    const handleSearchMovie = ()=>{
        navigation.navigate('Search')
    }
    


    useEffect( ()=>{

        let isActive = true;
        const ac = new AbortController();

        
        const getMovies = async ()=>{
            const [nowData,popularData,topData] = await Promise.all([
                api.get('/movie/now_playing',{
                    params:{
                        api_key:key,
                        language:'pt-BR',
                        page:1
                    }
                }),
                api.get('/movie/popular',{
                    params:{
                        api_key:key,
                        language:'pt-BR',
                        page:1
                    }
                }),
                api.get('/movie/upcoming',{
                    params:{
                        api_key:key,
                        language:'pt-BR',
                        page:1
                    }
                 }),
    
            ]);
            if (isActive) {
                const nowList = getListMovies(10,nowData.data.results);
                const popularList =  getListMovies(10,popularData.data.results);
                const topList =  getListMovies(10,topData.data.results);
        
                setNowMovies(nowList);
                setPopularMovies(popularList);
                setTopMovies(topList);  
                setBannerMovie(nowData.data.results[randomBanner(nowData.data.results)]);
                //ele vai pegar um objeto aleatorio do resultado
                
                setLoading(false); 
            }

            
        }
        getMovies();

        //caso troca de tela nao vai fazer a requisicao
        return ()=>{
            isActive = false;
            ac.abort();
        }
        
    },[]);

    const navigateDetailsPage =(movie)=>{
        navigation.navigate('Details',{id:movie.id});
    }

    if (loading) {
        return(
            <Container>
                <ActivityIndicator  size='large' color={theme.colors.success}/>
            </Container>
        )
    }

    return(
        <Container>
            <Header title={name} iconName={iconNames} />
            <SearchContainer>
                <SearchInput 
                    value={searchInput}
                    onChangeText={(t)=>setSearchInput(t)}
                    placeholder="Pesquise aqui..."
                />
                <SearchButton onPress={handleSearchMovie}>
                    <SearchIcon name="search"/>
                </SearchButton>
            </SearchContainer> 
               
            <ScrollView showsVerticalScrollIndicator={false}>
                <Title>Em cartaz</Title>

                <BannerButton activeOpacity={0.8} onPress={()=> navigateDetailsPage(bannerMovie)}>
                    <Banner 
                        resizeMethod='resize'
                        // resizeMode="cover"
                        source={{uri:posterPath+bannerMovie.poster_path}} 
                        
                        />
                </BannerButton>
                
                <SliderMovie 
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={nowMovies}
                    keyExtractor={(item)=>String(item.id)}
                    renderItem={({item})=> (
                            <SliderItem 
                                data={item}
                                navigatePage={()=> navigateDetailsPage(item)}
                            />
                        )
                    }
                
                />

                <Title>Populares</Title>
                <SliderMovie 
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={popularMovies}
                    keyExtractor={(item)=>String(item.id)}
                    renderItem={({item})=> (
                            <SliderItem 
                                data={item}
                                navigatePage={()=> navigateDetailsPage(item)}
                            />
                        )
                    }
                
                />
                <Title>Proximos Lançamentos</Title>
                <SliderMovie 
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item)=>String(item.id)}
                    data={topMovies}
                    renderItem={({item})=> (
                            <SliderItem 
                                data={item}
                                navigatePage={()=> navigateDetailsPage(item)}
                            />
                        )
                    }
                />

            </ScrollView> 

        </Container>
    );
}