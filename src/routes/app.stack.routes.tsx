import React from 'react';
import { createStackNavigator  } from '@react-navigation/stack';

import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { Search } from '../pages/Search';
import { useTheme } from 'styled-components';



const {Navigator, Screen} = createStackNavigator();

export const AppStackRoutes = () => {
    const theme = useTheme();

    return (
        <Navigator 
            initialRouteName="Home"

        >
            <Screen 
                name="Home"
                component={Home}
                options={{
                    headerShown:false
                }}
            />
            <Screen 
                name="Details"
                component={Details}
                options={{
                    headerShown:false
                }}
            />
            <Screen 
                name="Search"
                component={Search}
                options={{
                    title:"Sua Busca",
                    headerTintColor:theme.colors.shape,
                    headerStyle:{
                        
                    }
                }}
            />

        </Navigator>
    );
}