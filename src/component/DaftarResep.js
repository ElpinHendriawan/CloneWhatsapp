import React,{Component} from "react";
import {Text,View,Image, ScrollView} from "react-native";
import styles from "../assets/Style.js";
import bantal from "../assets/img/bantal.jpg";

class DaftarResep extends Component{
    
    render(props){
        return (
           <View>
                <ScrollView>
                    <View style={styles.shd,{flexDirection:"row",padding:10,margin:10,backgroundColor:"#654062",borderRadius:10}}>
                        <View style={{flex:1}}>
                            <Image source={bantal} style={{width:"100%", height:100,borderRadius:10}} />
                        </View>
                        <View style={{flex:2,padding:10}}>
                            <Text style={styles.judulResep}>{this.props.judul} </Text>
                            <Text style={styles.slug}>{this.props.slug}</Text>
                        </View>
                    </View>

               </ScrollView>
           </View>
        )
    }
}

export default DaftarResep;