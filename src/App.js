import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import styles from './assets/Style'
import Router from './router';

const App = ()=> {
  return(
      <NavigationContainer>
        <View style={styles.judulBox}>
          <TextInput placeholderTextColor={'#b0d9af'} placeholder={'Cari Resep Jajanan Yang Anda Inginkan'} style={Styles.kotakCari}></TextInput>
        </View>
        <Router/>
      </NavigationContainer>
  )
}

const Styles = StyleSheet.create({
  kotakCari :{
    borderBottomWidth:1,
    borderBottomColor : '#ebecf1',
    color: '#ebecf1',
    textAlign:"center",
  }
})

export default App;