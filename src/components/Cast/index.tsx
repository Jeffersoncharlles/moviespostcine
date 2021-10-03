import React from 'react';
import { posterPath } from '../../services/api';

import {
    Container,
    BannerItemImg,
    Title,
    ImageContainer,
} from './styles';

interface ICast{
    profile_path:string;
    name:string;
}

export const Cast = ({data}) => {
    // console.log(data);

    return(
        <Container>
            <ImageContainer activeOpacity={0.8}  >
                <BannerItemImg
                    // resizeMode="contain" 
                    source={{uri: posterPath+data.profile_path}}

                />
            </ImageContainer>
            <Title numberOfLines={1}>{data.name}</Title>
        </Container>
    );
}