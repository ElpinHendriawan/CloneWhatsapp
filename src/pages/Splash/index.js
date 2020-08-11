import React, { useEffect } from 'react';
import {Text,View,StyleSheet,Image, YellowBox} from 'react-native';
import logo from '../../assets/img/logosplash.png';
import loading from '../../assets/img/loading.gif';

const Splash =({navigation}) =>{
    useEffect(()=> {
        setTimeout(()=>{
            navigation.replace('Home')
        },1500)
    })
    return (
        <View style={styles.container}>
            <Text style={styles.selamat}>SELAMAT DATANG</Text>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.label}>V.1.0.0</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        alignContent:"center",
        justifyContent:"center",
    },
    logo:{
        width:150,
        height:150,       
    },
    label:{
        fontWeight:'bold',
        fontSize:20,
    },
    selamat:{
        fontSize:28,
        color: '#eebb4d',
    }
});

export default Splash;