import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/routes';

import {ThemeProvider} from 'styled-components';
import theme from './src/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar hidden={false} backgroundColor="transparent" translucent/>
      <Routes />
    </ThemeProvider>
  );
}

