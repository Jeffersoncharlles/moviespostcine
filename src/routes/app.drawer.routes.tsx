import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const {Navigator, Screen} = createDrawerNavigator();

import { Movies } from "../pages/Movies";

import { AppStackRoutes } from './app.stack.routes';
import { useTheme } from "styled-components";

export const AppDrawerRoutes = () => {
    const theme = useTheme();


    return (
        <Navigator 
            screenOptions={{
                headerShown:false, //remover header
                drawerStyle:{
                    backgroundColor: theme.colors.drawer,
                    paddingTop: 20,
                },
                drawerActiveBackgroundColor:theme.colors.danger,
                drawerActiveTintColor: theme.colors.shape,
                drawerInactiveTintColor:theme.colors.text,
            }}
            
        >
            <Screen 
                name="HomeDrawer"
                component={AppStackRoutes}
                options={{
                    title:'Home',
                    drawerIcon: ({focused,size,color})=>(
                        <MaterialCommunityIcons name={focused ? 'movie-open' : 'movie-outline'} size={size} color={color} />
                    )
                }}
            />
            <Screen 
                name="Movies"
                component={Movies}
            />

        </Navigator>
    );
}