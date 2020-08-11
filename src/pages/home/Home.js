import React from 'react';
import {View,Text,Image,ScrollView} from 'react-native';
import Terbaru from '../../component/Terbaru';
import ActionButton from '../../component/ActionButton';
import styles from '../../assets/Style';

import dodol from "../../assets/img/dodol.jpg";
import bantal from "../../assets/img/bantal.jpg";
import putuAyu from "../../assets/img/putuAyu.jpg";
import cerorot from "../../assets/img/cerorot.jpg";
import tarek from "../../assets/img/tarek.jpg";
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home =({navigation,props})=>{
    const handleGoTo=(screen)=>{
        navigation.navigate(screen);
    }
    return(
        <ScrollView>
            <Text style={{textAlign:"center",padding:10}}>Resep Terbaru</Text>
            <View style={{flexDirection:"row"}}>
                <View style={styles.container}>
                    <View style={styles.boxdalam}>
                    <Image source={dodol} style={{width:"100%",height:140,borderRadius :10}} />
                    <Text style={styles.judulResep}>Kue Dodol Rumput Laut</Text>
                    <Text style={styles.slug}></Text>     
                    <ActionButton onPress={()=>handleGoTo('Dodol')}/>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.boxdalam}>
                    <Image source={putuAyu} style={{width:"100%",height:140,borderRadius :10}} />
                    <Text style={styles.judulResep}>Kue Putu Ayu Khas Lombok</Text>
                    <Text style={styles.slug}></Text>     
                    <ActionButton onPress={()=>handleGoTo('PutuAyu')}/>
                    </View>
                </View>

            </View>
            <Text style={{textAlign:"center",padding:10}}>Daftar Resep Lainnya</Text>
        
            <TouchableOpacity onPress={()=>handleGoTo('Bantal')}>                    
                <View style={styles.shd,{flexDirection:"row",padding:10,margin:10,backgroundColor:"#654062",borderRadius:10}}>
                    <View style={{flex:1}}>
                        <Image source={bantal} style={{width:"100%", height:100,borderRadius:10}} />
                    </View>
                    <View style={{flex:2,padding:10}}>
                        <Text style={styles.judulResep}>Kue Bantal </Text>
                        <Text style={styles.slug}>Khas Lombok</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>handleGoTo('Cerorot')}>                    
                <View style={styles.shd,{flexDirection:"row",padding:10,margin:10,backgroundColor:"#654062",borderRadius:10}}>
                    <View style={{flex:1}}>
                        <Image source={cerorot} style={{width:"100%", height:100,borderRadius:10}} />
                    </View>
                    <View style={{flex:2,padding:10}}>
                        <Text style={styles.judulResep}>Kue Cerorot </Text>
                        <Text style={styles.slug}>Khas Lombok</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>handleGoTo('Tarek')}>                    
                <View style={styles.shd,{flexDirection:"row",padding:10,margin:10,backgroundColor:"#654062",borderRadius:10}}>
                    <View style={{flex:1}}>
                        <Image source={tarek} style={{width:"100%", height:100,borderRadius:10}} />
                    </View>
                    <View style={{flex:2,padding:10}}>
                        <Text style={styles.judulResep}>Kue Tarek </Text>
                        <Text style={styles.slug}>Khas Lombok</Text>
                    </View>
                </View>
            </TouchableOpacity>

        </ScrollView>
    )
}

export default Home;