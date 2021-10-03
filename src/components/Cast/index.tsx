import React from 'react';

import {
    Container,
    BannerItemImg,
    Title,
    ImageContainer,
} from './styles';

export const Cast = ({data}) => {

    return(
        <Container>
            <ImageContainer activeOpacity={0.8}  >
                <BannerItemImg
                    // resizeMode="contain" 
                    source={{uri:'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2076&q=80'}}

                />
            </ImageContainer>
            <Title numberOfLines={1}>AtoresAtoresAtoresAtoresAtores</Title>
        </Container>
    );
}