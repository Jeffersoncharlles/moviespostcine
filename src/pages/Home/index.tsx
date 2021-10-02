import React,{useEffect,useState} from 'react';

import { ScrollView } from 'react-native';

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
import { api, key } from '../../services/api';
import { getListMovies } from '../../utils/movie';

interface IMovies{
    title:string;
    poster_path:string;
    release_date:string;
    vote_average:number;
    vote_count:number;
    overview:string;
}

export const Home = () => {
    const [nowMovies, setNowMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [topMovies, setTopMovies] = useState([]);
    const name = 'Movies Poster Cine'
    const iconNames = 'menu'

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
            api.get('/movie/top_rated',{
                params:{
                    api_key:key,
                    language:'pt-BR',
                    page:1
                }
             }),

        ]);
        console.log(nowData.data.results);
        const nowList = await getListMovies(10,nowData.data.results);
        const popularList =  getListMovies(10,popularData.data.results);
        const topList =  getListMovies(10,topData.data.results);

        setNowMovies(nowList);
        setPopularMovies(popularList);
        setTopMovies(topList);   
    }
    getMovies();


    useEffect( ()=>{
       
    },[]);

    return(
        <Container>
            <Header title={name} iconName={iconNames} />
            <SearchContainer>
                <SearchInput 
                    placeholder="Pesquise aqui..."
                />
                <SearchButton>
                    <SearchIcon name="search"/>
                </SearchButton>
            </SearchContainer> 
               
            <ScrollView showsVerticalScrollIndicator={false}>
                <Title>Em cartaz</Title>

                <BannerButton activeOpacity={0.8} onPress={()=>alert('teste')}>
                    <Banner 
                        resizeMethod='resize'
                        source={{uri:'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1925&q=80'}} />
                </BannerButton>
                
                <SliderMovie 
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={nowMovies}
                    
                    renderItem={({item})=> (
                            <SliderItem 
                                data={item}
                                
                            />
                        )
                    }
                
                />

                <Title>Populares</Title>
                <SliderMovie 
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1,2,3,4,5]}
                    renderItem={({item})=> (
                            <SliderItem 
                                title="vingadores" 
                                rate={'9/10'} 
                                banner="link" 
                            />
                        )
                    }
                
                />
                <Title>Mais Votados</Title>
                <SliderMovie 
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1,2,3,4,5]}
                    renderItem={({item})=> (
                            <SliderItem 
                                title="vingadores" 
                                rate={'9/10'} 
                                banner="link" 
                            />
                        )
                    }
                />

            </ScrollView> 

        </Container>
    );
}