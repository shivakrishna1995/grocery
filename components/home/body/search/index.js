import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

export default React.memo(() => {
    return <View style={styles.searchView}>
        <Image style={styles.searchIcon} source={require('../../../../img/search.png')} />
        <Text style={styles.searchText}>What are you looking for...</Text>
    </View>
});

const styles = StyleSheet.create({
    searchView: { height: 40, marginTop: 10, marginBottom: 10, display: 'flex', flexDirection: 'row', alignItems: 'center', borderBottomColor:'rgba(0,0,0,0.4)',borderBottomWidth:0.3 },
    searchIcon: { width: 23, height: 23 },
    searchText: { paddingLeft: 10, fontSize: 15, color: 'rgba(0,0,0,0.4)' }
});