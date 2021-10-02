import styled from 'styled-components/native';
import {Feather,Ionicons} from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton,} from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';


export const Container = styled.View`
    flex: 1;
    background-color: ${({theme})=> theme.colors.background};
`;

export const Header =styled.View`
    margin-top: ${getStatusBarHeight()+20}px;   
    flex-direction: row;
    justify-content: space-between;
`;
export const HeaderButton =styled(RectButton)`
    /* margin-top: ${RFValue(24)}px; */
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;
    padding:14px;
    border-radius: 5px;
`;
export const BackHeader =styled(Feather)`
    font-size: ${RFValue(28)}px;
    color: ${ ({theme}) => theme.colors.shape};
`;
export const FavoritesHeader =styled(Ionicons)`
    font-size: ${RFValue(28)}px;
    color: ${ ({theme}) => theme.colors.shape};
`;