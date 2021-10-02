import styled from 'styled-components/native';
import {Ionicons} from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
    padding-top: ${RFValue(12)}px;
    padding-bottom: ${RFValue(12)}px;
    padding-right: ${RFValue(10)}px;
    width: ${RFValue(140)}px;
    height: ${RFValue(180)}px;
`;
export const BannerItemImg = styled.Image`
    width:100%;
    height: ${RFValue(170)}px;
    border-radius: 20px;

`;
export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    padding-top: ${RFValue(8)}px;
    color:${ ({theme}) => theme.colors.text} ;
`;
export const RateContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const Rate = styled.Text`
    padding-left: 4px;
    font-size: ${RFValue(12)}px;
    color:${ ({theme}) => theme.colors.text} ;
`;
export const StarIcon = styled(Ionicons)`
    font-size: ${RFValue(12)}px;
    color: ${ ({theme}) => theme.colors.star_icon};
`;