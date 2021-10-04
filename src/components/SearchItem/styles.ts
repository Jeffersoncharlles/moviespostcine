import styled from 'styled-components/native';
import { RectButton,} from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import {Feather,Ionicons} from '@expo/vector-icons';

export const Container = styled.TouchableOpacity`
    padding: 14px;
`;
export const BannerImag = styled.Image`
    width: 100%;
    height: ${RFValue(140)}px;
    border-radius: 8px;
`;

export const TitleName = styled.Text`
    color:${({theme})=>theme.colors.shape};
    font-size: ${RFValue(12)}px;
    font-weight: bold;
    padding-top: 8px;
`;
export const Rate = styled.Text`
    color:${({theme})=>theme.colors.text};
    padding-left: 4px;
`;
export const RaterConter = styled.View`
    flex-direction: row;
    align-items: center;
    padding-top: 4px;
`;
export const StarICon = styled(Ionicons)`
    color:${({theme})=>theme.colors.star_icon};
    font-size: ${RFValue(12)}px;
`;