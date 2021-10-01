import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme})=> theme.colors.background};
   
`;
export const Header = styled.View`
   
    background-color: ${({theme})=> theme.colors.shape};
`;

export const SearchContainer = styled.View`
    flex-direction: row;
    width: 100%;
    height: ${RFValue(35)}px;
    align-items: center;
    padding: 0 14px;
    margin-bottom: ${RFValue(8)}px;
`;
export const SearchInput = styled.TextInput`
    background-color: ${({theme})=> theme.colors.input_color};
    width: 85%;
    height: ${RFValue(35)}px;
    border-radius: ${RFValue(25)}px;
    padding:  8px 15px;
    font-size: ${RFValue(18)}px;
    color: ${({theme})=> theme.colors.shape};
`;
export const SearchButton = styled.View`
    width: 15%;
    height: ${RFValue(35)}px;
    align-items: center;
    justify-content: center;
`;
export const SearchIcon = styled(Feather)`
    font-size: ${RFValue(24)}px;
    color: ${ ({theme}) => theme.colors.shape};
`;