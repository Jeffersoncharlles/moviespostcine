import { FlatList } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme})=>theme.colors.background};
`;
export const ContainerActive = styled.View`
    flex: 1;
    background-color: ${({theme})=>theme.colors.background};
    justify-content: center;
    align-items: center;
`;

export const FlatListMovies = styled(FlatList)`

`;