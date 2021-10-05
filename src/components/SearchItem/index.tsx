import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { posterPath ,posterPath2} from '../../services/api';

import {
    Container,
    BannerImag,
    TitleName,
    RaterConter,
    StarICon,
    Rate
} from './styles';

interface ISearchItem{
    item:{
        backdrop_path:string;
    }
}

export const SearchItem = ({data , navigatePage}:any) => {
    const navigation = useNavigation();
    
    const detailsMovie = ()=>{
        if (data.item.release_date === '') {
            return;
        }
        navigatePage(data.item);
    }

    return(
        <Container activeOpacity={0.7} onPress={detailsMovie}>
            { data?.item.poster_path ? 
                <BannerImag 
                    // resizeMethod="resize"
                    resizeMode="cover"
                    source={{uri:`https://image.tmdb.org/t/p/original/${data?.item.poster_path}`}}
                />
             : 
                <BannerImag 
                    resizeMethod="resize"
                    source={require('../../assets/semfoto.png') }

                />
            }
            <TitleName>{data.item.title}</TitleName>
            <RaterConter>
                <StarICon name="md-star" />
                <Rate>{data.item.vote_average} /10</Rate>
            </RaterConter>

        </Container>
    );
}