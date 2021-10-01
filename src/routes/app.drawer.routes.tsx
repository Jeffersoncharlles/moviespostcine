import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

const {Navigator, Screen} = createDrawerNavigator();

import { Movies } from "../pages/Movies";

import { AppStackRoutes } from './app.stack.routes';

export const AppDrawerRoutes = () => {
    return (
        <Navigator 
            
        >
            <Screen 
                name="HomeDrawer"
                component={AppStackRoutes}
            />
            <Screen 
                name="Movies"
                component={Movies}
            />

        </Navigator>
    );
}