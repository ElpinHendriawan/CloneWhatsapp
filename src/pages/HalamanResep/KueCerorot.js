import React from 'react';
import { Text, View, StyleSheet,Image, ScrollView, SafeAreaView,FlatList } from 'react-native';
import cerorot from "../../assets/img/cerorot.jpg";

const bahan = [
    {
      id: '1',
      title: '4 kg tepung beras',
    },
    {
        id:'2',
        title:'1 butir kelapa'
    },
    {
        id:'3',
        title:'1/2 kg gula pasir'
    },
    {
        id:'4',
        title:'1/4 gr gula aren'
    },  
    {
        id:'5',
        title:'3 sdt garam'
    
    }
  ];
const cara_pembuatan = [
    {
        id:'1',
        title:'Parut kelapa dan peras santannya'
    },
    {
        id:'2',
        title:'masak gula merah bersama santan encer pada wadah sampai larut sempurna'
    },
    {
        id:'3',
        title:'untuk adonan utama campurkan tepung beras,gula pasir, garam dan santan'
    },
    {
        id:'4',
        title:'masukkan gula merah dan santan yang sudah di masak ke dalam wadah adonan utama'
    },
    {
        id:'5',
        title:'tuangkan adonan kue cerorot yang sudah jadi kedalam tengkorong sampai semuanya terisi penuh'
    },
    {
        id:'6',
        title:'panaskan dandangan hingga beruap lalu masukkan tengkorong-tengkorong yang sudah terisi dan kukus dalam 1 jam'
    },
    {
        id:'7',
        title:'angkat dan sajikan'
    }
];
  
const Item = ({ title }) => (
    <View >
        <Text style={Css.list}>{title}</Text>
    </View>
);
const Langkah = ({ title }) => (
    <View >
        <Text style={Css.list}>{title}</Text>
    </View>
);

const Cerorot  = (props,{navigation}) => {
    
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    const renderItem2 = ({ item }) => (
        <Langkah title={item.title} />
    );
    
    return (
        <View style={Css.container}>
        <ScrollView>
        <View style={Css.kotakHeader}>
            <View style={{flex:2}}>
                <Image source={cerorot} style={Css.thumbnail} />
            </View>

            <View style={{flex:3,justifyContent:"center",paddingLeft:20}}>
                <Text style={Css.judulResep}>Kue Cerorot</Text>
                <Text>Husnul Fitri</Text>
            </View>
        </View>
        <Text style={Css.bahan}>Bahan Yang Di Butuhkan</Text>
        <SafeAreaView  style={{padding:20}}>
            <FlatList
                data={bahan}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>

        <Text style={Css.bahan}>Langkah Pembuatan</Text>

        <SafeAreaView  style={{flex:1,padding:20}}>
            <FlatList 
                data={cara_pembuatan}
                renderItem={renderItem2}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    </ScrollView>
    </View>
    )
};

const Css = StyleSheet.create({
    container:{
        height:"100%",
        marginBottom:50,
    },
    kotakHeader:{
        flexDirection:'row',
        padding:10,
        marginTop:25,
        height:150,
        justifyContent:"center"
    },
    thumbnail:{
        width : "100%",
        height: "100%",
        borderRadius: 100,
    },
    judulResep:{
        fontSize:24,
        fontWeight: "bold",
        color: "black",
        marginBottom: 15,

    },
    bahan:{
        textAlign:"center",
        marginHorizontal:20,
        paddingTop:10,
        borderTopWidth:1,
        borderTopColor:"#006a71"
    },list:{
        padding:15,
        margin:4,
        backgroundColor: "#006a71",
        borderRadius:25,
        color:"#ffffdd",
    }

})

export default Cerorot;
