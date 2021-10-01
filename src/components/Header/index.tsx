import React from 'react';
import { useNavigation } from '@react-navigation/native';



import {
    Container,
    MenuButton,
    Title,
    IconMenu,

} from './styles';

interface Props {
    title: string;
    iconName: string;
}

export const Header = ({title,iconName}:Props) => {
    const navigation = useNavigation();

    return(
        <Container>
            <MenuButton  onPress={()=>navigation.openDrawer()}>
                <IconMenu name={iconName} />
            </MenuButton>

            <Title>{title}</Title>
        </Container>
    );
}