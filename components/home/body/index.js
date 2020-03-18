import React from 'react';
import { StyleSheet, View } from 'react-native';
import SearchView from './search'

export default React.memo(() => {
    return <View style={styles.root}>
        <SearchView />
    </View>
});

const styles = StyleSheet.create({
    root: { display: 'flex', flex: 1, flexDirection: 'column', marginTop: 30, marginLeft: 20, marginRight: 20, paddingLeft: 5, paddingRight: 5 },
});
