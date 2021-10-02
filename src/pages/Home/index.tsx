import React from 'react';

import { ScrollView } from 'react-native';

import {
    Container,
    SearchContainer,
    SearchInput,
    SearchButton,
    SearchIcon,
    Title,
    BannerButton,
    Banner,
    SliderMovie,
} from './styles';

import { Header } from '../../components/Header';
import { SliderItem } from '../../components/SliderItem';

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
               
            <ScrollView>
                <Title>Em cartaz</Title>

                <BannerButton activeOpacity={0.8} onPress={()=>alert('teste')}>
                    <Banner 
                     resizeMethod='resize'
                    source={{uri:'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1925&q=80'}} />
                </BannerButton>
                <SliderMovie 
                    horizontal={true}
                    data={[1,2,3,4,5]}
                    renderItem={({item})=><SliderItem  />}
                
                />

            </ScrollView>

        </Container>
    );
}