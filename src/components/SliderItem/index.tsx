import React from 'react';
import { posterPath } from '../../services/api';

import {
    Container,
    Title,
    BannerItemImg,
    RateContainer,
    StarIcon,
    Rate,
} from './styles';

export const SliderItem = ({data}:any) => {
    
    

    return(
        <Container activeOpacity={0.8}  >
            <BannerItemImg 
                source={{uri:`${posterPath+data.poster_path}`}}

            />
            <Title numberOfLines={1}>{data.title}</Title>
            <RateContainer>
                <StarIcon name='md-star'/>
                <Rate>{data.vote_average}/10</Rate>
            </RateContainer>

        </Container>
    );
}