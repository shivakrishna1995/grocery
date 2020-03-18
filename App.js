import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import store from './store';
import { Provider } from 'react-redux';
import Home from './components/home';

export default React.memo(() => (
    <Provider store={store}>
        <StatusBar translucent={true} />
        <Home />
    </Provider>
));
