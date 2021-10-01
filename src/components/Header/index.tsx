import React from 'react';



import {
    Container,
    MenuButton,
    Title,
    IconMenu,

} from './styles';

export const Header = () => {
    const name = 'Movies Poster Cine'

    return(
        <Container>
            <MenuButton>
                <IconMenu name="menu" />
            </MenuButton>

            <Title>{name}</Title>
        </Container>
    );
}