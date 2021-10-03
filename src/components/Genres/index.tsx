import React from 'react';

import {
    Container,
    Title
} from './styles';

export const Genres = ({data}) => {

    return(
        <Container>
            <Title>{data.name}</Title>
        </Container>
    );
}