import 'styled-components';
import {dark,light} from './themes';
import theme from './theme';

// import { useColorScheme } from 'react-native';
// const deviceTheme = useColorScheme();

// const theme = themes[deviceTheme] || themes.dark ;

//acessar o modulo do styled-components
declare module 'styled-components'{
    //sobrescrever 
    // do dando o nome de ThemeType e 
    //o typeof ta copiando o theme
    type ThemeType = typeof theme


    //exportando a interface default e entendendo ela para ThemeType
    export interface DefaultTheme extends ThemeType{}
}