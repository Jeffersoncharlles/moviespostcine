import React from 'react';

import {
    Container,
    Header,
    HeaderButton,
    BackHeader,
    FavoritesHeader,
} from './styles';

export const Details = () => {

    return(
        <Container>
            <Header>
                <HeaderButton>
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
        </Container>
    );
}