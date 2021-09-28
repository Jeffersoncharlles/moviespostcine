import React from 'react';
import { createStackNavigator  } from '@react-navigation/stack';

import { Home } from '../pages/Home';



const {Navigator, Screen} = createStackNavigator();

export const AppStackRoutes = () => {


    return (
        <Navigator 
            initialRouteName="Home"
        >
            <Screen 
                name="Home"
                component={Home}
            />

        </Navigator>
    );
}