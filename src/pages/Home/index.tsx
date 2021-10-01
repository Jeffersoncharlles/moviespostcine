import React from 'react';

import {
    Container,
    SearchContainer,
    SearchInput,
    SearchButton,
    SearchIcon,
} from './styles';

import { Header } from '../../components/Header';

export const Home = () => {
    const name = 'Movies Poster Cine'
    const iconNames = 'menu'

    return(
        <Container>
            <Header title={name} iconName={iconNames} />
            <SearchContainer>
                <SearchInput 
                    placeholder="Pesquise aqui..."
                />
                <SearchButton>
                    <SearchIcon name="search"/>
                </SearchButton>
            </SearchContainer>    

        </Container>
    );
}