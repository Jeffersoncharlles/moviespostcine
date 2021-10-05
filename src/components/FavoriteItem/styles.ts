import styled from 'styled-components/native';
import {Feather,Ionicons} from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton,} from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { LinearGradient } from 'expo-linear-gradient';
import {WebView} from 'react-native-webview';

export const Container = styled.View`
    padding: 14px;
`;
export const NameMovie = styled.Text`
    font-size: ${RFValue(12)}px;
    color: ${({theme})=> theme.colors.shape};
    font-weight: bold;
`;

export const RaterContainer = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 8px 0;
`;

export const StarIconRate = styled(Ionicons)`
    font-size: ${RFValue(24)}px;
    color: ${({theme})=> theme.colors.star_icon};
`;

export const Rate = styled.Text`
    color: ${({theme})=> theme.colors.shape};
    font-size: ${RFValue(12)}px;
    padding-left: 4px;
`;

export const ActionContainer = styled.View`
    flex-direction: row;
    align-items: center;

`;

export const DetailButton = styled(RectButton)`
    width: 85%;
    height:${RFValue(30)}px;
    background-color:${({theme})=> theme.colors.danger};
    justify-content: center;
    align-items: center;
    border-radius: ${RFValue(17)}px;

`;

export const TitleDetalhes = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({theme})=> theme.colors.shape};
`;

export const DeleteButton = styled(RectButton)`
    width: 15%;
    height:${RFValue(30)}px;
    justify-content: center;
    align-items: center;
    border-radius: ${RFValue(10)}px;
`;

export const DeleteIcon = styled(Ionicons)`
    font-size: ${RFValue(24)}px;
    color: ${({theme})=> theme.colors.shape};
`;
