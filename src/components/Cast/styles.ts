import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
`;
export const ImageContainer = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    margin-bottom: 3px;
`;
export const BannerItemImg = styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    border-radius: ${RFValue(24)}px;
    margin-left: 5px;
`;
export const Title = styled.Text`
    font-size: ${RFValue(12)}px;
    color: ${ ({theme}) => theme.colors.shape};
    padding: 5px;
    
`;