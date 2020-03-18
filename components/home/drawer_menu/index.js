import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { menuToggle } from '../../../store/actions/activeView'

let screen_height = Dimensions.get('window').height;

export default () => {
    const [height, setHeight] = useState(new Animated.Value(0));
    const state = useSelector(state => state.activeView);
    const dispatch = useDispatch();

    useEffect(() => {
        if (state.menuToggle) {
            Animated.timing(height, { toValue: screen_height, duration: 300 }).start();
        } else {
            Animated.timing(height, { toValue: 0, duration: 300 }).start();
        }
    }, [state])

    return (
    <Animated.View style={[styles.root, { height: height }]}>
        <Image resizeMode={'stretch'} style={styles.bg} source={require('../../../img/drawer_bg.png')} />
        <View style={styles.menuView}>
        </View>
        <TouchableOpacity onPress={() => dispatch(menuToggle())} style={styles.drawerCloseImgView}>
            <Image style={styles.drawerCloseImg} resizeMode={'stretch'} source={require('../../../img/drawer_close.png')} />
        </TouchableOpacity>
    </Animated.View>)
}

const styles = StyleSheet.create({
    root: { display: 'flex' },
    bg: { width: '100%', height: '100%' },
    menuView: { position: 'absolute', top: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column' },
    drawerCloseImgView: { position: 'absolute', bottom: 0, display: 'flex', alignItems: 'center', width: '100%' },
    drawerCloseImg: { width: 65, height: 35 }
})