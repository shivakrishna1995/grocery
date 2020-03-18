import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './header';
import Body from './body';
import DrawerMenu from './drawer_menu';

export default () => {
    return (
        <View style={styles.root}>
            <DrawerMenu />
            <Header />
            <Body />
        </View>
    );
}

const styles = StyleSheet.create({
    root: { display: 'flex', flex: 1, flexDirection: 'column' }
});