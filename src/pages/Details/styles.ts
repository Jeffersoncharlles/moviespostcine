import styled from 'styled-components/native';
import {Feather,Ionicons} from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton,} from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { LinearGradient } from 'expo-linear-gradient';


export const Container = styled.View`
    flex: 1;
    background-color: ${({theme})=> theme.colors.background};
`;

export const Header =styled.View`
    /*//vai ficar uma camada acima sobre os itens*/
    z-index: 99;
    position: absolute;
    top: ${getStatusBarHeight()+30}px;
    width:100% ;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 14px;
`;

export const HeaderButton =styled(RectButton)`
    /* margin-top: ${RFValue(24)}px; */
    width: ${RFValue(46)}px;
    height: ${RFValue(46)}px;
    align-items: center;
    justify-content: center;
    background-color: ${({theme})=> theme.colors.header_transparante};
    margin-bottom: 8px;
    border-radius: 23px;
`;
export const BackHeader =styled(Feather)`
    font-size: ${RFValue(28)}px;
    color: ${ ({theme}) => theme.colors.shape};
`;
export const FavoritesHeader =styled(Ionicons)`
    font-size: ${RFValue(28)}px;
    color: ${ ({theme}) => theme.colors.shape};
`;

export const Banner = styled.Image`
    width: 100%;
    height: ${RFValue(350)}px;
    /* border-bottom-left-radius: ${RFValue(70)}px; */
    border-bottom-right-radius: ${RFValue(70)}px;
`;
export const BannerLinear = styled(LinearGradient)`
    width: 100%;
    height: ${RFValue(350)}px;
    
`;

export const ButtonLink = styled(RectButton)`
    background-color:${ ({theme}) => theme.colors.danger};
    width: ${RFValue(46)}px;
    height: ${RFValue(46)}px;
    justify-content: center;
    align-items: center;
    border-radius: ${RFValue(23)}px;
    position: absolute;
    top: ${RFValue(315)}px;
    right:  ${RFValue(10)}px;
    z-index:99;
`;
/**
 *   position: absolute;
 *  para zerar a imagem e ficar sobre a imagem
 *  top: ${RFValue(300)}px; //vai desse ele 300 px
 *  right:  ${RFValue(10)}px; vai tirar da direta 10 px
 *  
 *  
 *  
 *  
 *  
 **/
export const IconLink = styled(Feather)`
    font-size: ${RFValue(24)}px;
    color: ${ ({theme}) => theme.colors.shape};
`;
export const TitleMovie = styled.Text`
    font-size: ${RFValue(20)}px;
    color: ${ ({theme}) => theme.colors.shape};
    font-weight: bold;
    padding: 8px 14px;
    margin-top: 8px;
`;
export const Rate = styled.Text`
    font-size: ${RFValue(17)}px;
    color: ${ ({theme}) => theme.colors.shape};
`;
export const ContainerArea = styled.View`
    flex-direction: row;
    align-items: center;
    padding:  0 14px;
    justify-content: space-between;
`;
export const IconStar =styled(Ionicons)`
    font-size: ${RFValue(24)}px;
    color: ${ ({theme}) => theme.colors.star_icon};
`;
export const IconStarEmpty =styled(Ionicons)`
    font-size: ${RFValue(24)}px;
    color: ${ ({theme}) => theme.colors.star_icon};
`;
export const IconHalfStar =styled(Ionicons)`
    font-size: ${RFValue(24)}px;
    color: ${ ({theme}) => theme.colors.star_icon};
`;
export const ListGeneral = styled.FlatList`
    padding-left: 14px;
    margin: 8px 0;
    max-height: ${RFValue(35)}px;
    min-height: ${RFValue(35)}px;

`;
export const OverviewScroll = styled.ScrollView`
    

`;
export const Description = styled.Text`
    font-size: ${RFValue(14)}px;
    padding-left: 14px;
    padding-right: 14px;
    padding-bottom: 30px;
    color: ${ ({theme}) => theme.colors.shape};
    line-height: ${RFValue(20)}px;
`;
export const ListCast = styled.FlatList`
    padding-left: 14px;
    margin: 8px 0;
    max-height: ${RFValue(35)}px;
    min-height: ${RFValue(35)}px;

`;
export const ModalView = styled.Modal`
`;