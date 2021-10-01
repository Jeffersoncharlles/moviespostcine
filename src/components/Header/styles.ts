import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Feather} from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    height: ${RFValue(70)}px;
    flex-direction: row;
    align-items: center;
    padding-left: ${RFValue(14)}px;
    margin-top: ${getStatusBarHeight()+20}px;
`;

export const MenuButton = styled.TouchableOpacity`
    height: ${RFValue(70)}px;
    align-items: center;
    flex-direction: row;
`;

export const Title = styled.Text`
    color: ${({theme})=>theme.colors.text};
    font-size: ${RFValue(18)}px;
    margin-left: ${RFValue(14)}px;
`;
export const IconMenu = styled(Feather)`
    font-size: ${RFValue(24)}px;
    color: ${ ({theme}) => theme.colors.shape};
`;