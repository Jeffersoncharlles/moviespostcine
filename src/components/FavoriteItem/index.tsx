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

export const FavoriteItem = ({data,deleteMovie,navigatePage}:any) => {

    return(
        <Container>
            <NameMovie>{data.title}</NameMovie>
            <RaterContainer>
                <StarIconRate name="md-star" />
                <Rate>{data.vote_average}/10</Rate>
            </RaterContainer>
            <ActionContainer>
                <DetailButton onPress={()=>navigatePage(data)}>
                    <TitleDetalhes>Ver Detalhes</TitleDetalhes>
                </DetailButton>
                <DeleteButton onPress={()=>deleteMovie(data.id)}>
                    <DeleteIcon name="trash"/>
                </DeleteButton>
            </ActionContainer>
        </Container>
    );
}