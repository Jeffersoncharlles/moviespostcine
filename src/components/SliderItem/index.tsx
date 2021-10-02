import React from 'react';

import {
    Container,
    Title,
    BannerItemImg,
    RateContainer,
    StarIcon,
    Rate,
} from './styles';

interface ICartaz {
    title: string;
    rate:string;
    banner:string;
}

export const SliderItem = ({title,rate,banner}:ICartaz) => {
    

    return(
        <Container activeOpacity={0.8}>
            <BannerItemImg 
                source={{uri:'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1925&q=80'}}
                resizeMethod='resize'

            />
            <Title numberOfLines={1}>{title}</Title>
            <RateContainer>
                <StarIcon name='md-star'/>
                <Rate>{rate}</Rate>
            </RateContainer>

        </Container>
    );
}