import React from 'react';

import {
    Container,
    NameMovie,
    RaterContainer,
    StarIconRate,
    Rate,
    ActionContainer,
    DetailButton,
    TitleDetalhes,
    DeleteButton,
    DeleteIcon,
} from './styles';

export const FavoriteItem = ({data}:any) => {

    return(
        <Container>
            <NameMovie>{data.title}</NameMovie>
            <RaterContainer>
                <StarIconRate name="md-star" />
                <Rate>{data.vote_average}/10</Rate>
            </RaterContainer>
            <ActionContainer>
                <DetailButton>
                    <TitleDetalhes>Ver Detalhes</TitleDetalhes>
                </DetailButton>
                <DeleteButton>
                    <DeleteIcon name="trash"/>
                </DeleteButton>
            </ActionContainer>
        </Container>
    );
}