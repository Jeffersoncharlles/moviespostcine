import styled from 'styled-components/native';
import {Feather,Ionicons} from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton,} from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { LinearGradient } from 'expo-linear-gradient';
import {WebView} from 'react-native-webview';

export const Container = styled.View``;

export const BackButton =styled(RectButton)`
    padding:10px;
    background-color:${({theme})=> theme.colors.danger};
    margin-top: ${RFValue(60)}px;
    flex-direction: row;
    align-items: center;
    
`;
export const Name = styled.Text`
    margin-left: 8px;
    color: ${({theme})=> theme.colors.shape};
    font-size:  ${RFValue(18)}px;
    font-weight: bold;
`;

export const Closed = styled(Feather)`
    font-size: ${RFValue(35)}px;
    color: ${({theme})=> theme.colors.shape};
`;
export const Navegador = styled(WebView)`
    
`;