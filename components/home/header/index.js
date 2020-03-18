import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { menuToggle } from '../../../store/actions/activeView'

const imgPath = '../../../';

export default () => {
    const dispatch = useDispatch();

    return <View style={styles.root}>
        <Image style={styles.headerImg} resizeMode={'stretch'} source={require(imgPath + 'img/header.png')} />
        <View style={styles.searchBar}>
            <Image style={styles.locationImg} resizeMode={'stretch'} source={require(imgPath + 'img/Location.png')} />
            <Text style={styles.locationText}>ECIL, Hyderabad, TS 50060, India</Text>
        </View>
        <TouchableOpacity onPress={() => dispatch(menuToggle())} style={{ position: 'absolute', top: 110 }}>
            <Image style={styles.menuIcon} resizeMode={'stretch'} source={require(imgPath + 'img/menu.png')} />
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    root: { display: 'flex', alignItems: 'center' },
    headerImg: { width: '100%', height: 140 },
    searchBar: { display: 'flex', flexDirection: 'row', alignItems: 'center', height: 44, backgroundColor: 'white', position: 'absolute', left: 0, right: 0, marginLeft: 20, marginRight: 20, paddingLeft: 5, paddingRight: 5, marginTop: 46, borderRadius: 4, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25 },
    locationImg: { width: 25, height: 27 },
    locationText: { marginLeft: 10, fontSize: 14, color: 'rgba(0,0,0,0.8)' },
    menuIcon: { width: 55, height: 55 }
})