import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    margin-right: 9px;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border-radius: 8px;
    background-color: ${ ({theme}) => theme.colors.shape};
`;
export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${ ({theme}) => theme.colors.text};
`;

