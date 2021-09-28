import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

const {Navigator, Screen} = createDrawerNavigator();

import { Home } from "../pages/Home";

export const AppDrawerRoutes = () => {
    return (
        <Navigator 
            
        >
            <Screen 
                name="Home"
                component={Home}
            />

        </Navigator>
    );
}