import React from 'react';
import { Text, View, StyleSheet,Image, ScrollView, SafeAreaView,FlatList } from 'react-native';
import putuAyu from "../../assets/img/putuAyu.jpg";

const bahan = [
    {
      id: '1',
      title: '4 butir telur',
    },
    {
        id:'2',
        title:'1 sdt SP'
    },
    {
        id:'3',
        title:'350 gr gula pasir'
    },
    {
        id:'4',
        title:'1 bungkus vanili'
    },  
    {
        id:'5',
        title:'400 gr tepung terigu'
    },
    {
        id:'6',
        title:'1 sdt baking powder'
    },
    {
        id:'7',
        title:'400 ml santan'
    },
    {
        id:'8',
        title:'Pewarna hijau'
    },
    {
        id:'9',
        title:'1 butir kelapa parut kukus'
    },
    {
        id:'10',
        title:'½ sdt garam'
    },
    {
        id:'11',
        title:'2 sdm tepung maizena/sagu'
    
    }
  ];
const cara_pembuatan = [
    {
        id:'1',
        title:'Mixer kecepatan tinggi bahan sampai kaku kemudian masukkan  pewarna makanan hijau'
    },
    {
        id:'2',
        title:'Campurkan kelapa,garam dan sagu,aduk rata,kukus 10 menit agar tidak cepat basi'
    },
    {
        id:'3',
        title:'Olesi cetakan dengan minyak,masukkan adonan ¾ . kukus adonan  selama 10 menit'
    },
     {
        id:'4',
        title:'selesai'
    
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

const PutuAyu  = (props,{navigation}) => {
    
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
                        <Image source={putuAyu} style={Css.thumbnail} />
                    </View>

                    <View style={{flex:3,justifyContent:"center",paddingLeft:20}}>
                        <Text style={Css.judulResep}>Kue Putu Ayu</Text>
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

export default PutuAyu;
