import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { AppStackRoutes } from './app.stack.routes';
import { AppDrawerRoutes } from './app.drawer.routes';


export const Routes = () => {
    
    return (
        <NavigationContainer>
           <AppDrawerRoutes />
        </NavigationContainer>
    );
}