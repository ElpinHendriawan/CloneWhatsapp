// import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    judul : {
      textAlign : 'center',
      fontSize : 28,
      color: '#f4f4f4',
    },
    judulResep : {
      textAlign : 'left',
      fontSize : 16,
      color: '#f4f4f4',
      fontWeight:'bold',
      paddingTop:10,
    },
    judulBox : {
      backgroundColor:'#80bdab',
      padding: 15,
      paddingTop:-10,
    },
    container :{
      padding:10,
    },
    boxdalam :{
      backgroundColor : "#80bdab",
      padding:12,
      width: 160,
      borderRadius :10,
    },
    slug :{
      fontSize :14,
      color:'#ebecf1',
      borderBottomWidth:1,
      borderBottomColor:'#e3dfc8',
      paddingBottom:4,
    
    },
    tombolMenu :{
        backgroundColor:'#eebb4d',
        padding:8,
        borderRadius:10,
        marginTop:6
    },
    textTombol:{
        color:'#206a5d',
        textAlign:'center'
    },
    flex:{
      fontSize:18,
      height:150,
      width:150,
      padding:20,
      backgroundColor:'#f0ece3',
      flex:1,
    },
    shd:{
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,
    }
  });

  export default styles;
  