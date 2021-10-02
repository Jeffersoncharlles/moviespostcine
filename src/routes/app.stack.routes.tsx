import React from 'react';
import { createStackNavigator  } from '@react-navigation/stack';

import { Home } from '../pages/Home';
import { Details } from '../pages/Details';



const {Navigator, Screen} = createStackNavigator();

export const AppStackRoutes = () => {


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

        </Navigator>
    );
}