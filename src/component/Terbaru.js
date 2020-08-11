import React from "react";
import {View,Text,Image, TouchableOpacity} from "react-native";
import dodol from "../assets/img/dodol.jpg";
import styles from "../assets/Style.js";
import ActionButton from "./ActionButton"

const Terbaru =(props,press)=>{
     
    return(
  
      <View style={styles.container}>
        <View style={styles.boxdalam}>
          <Image source={dodol} style={{width:"100%",height:140,borderRadius :10}} />
          <Text style={styles.judulResep}>{props.judul}</Text>
          <Text style={styles.slug}>{props.slug}</Text>

          <ActionButton caption="Detail" onPress={press}/>
        </View>
      </View>
    )
  };
  export default Terbaru;