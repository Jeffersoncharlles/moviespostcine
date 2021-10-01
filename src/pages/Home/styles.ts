import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme})=> theme.colors.background};
   
`;
export const Header = styled.View`
   
    background-color: ${({theme})=> theme.colors.shape};
`;