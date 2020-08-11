import React from 'react';
import { Text, View, StyleSheet,Image, ScrollView, SafeAreaView,FlatList } from 'react-native';
import bantal from "../../assets/img/bantal.jpg";

const bahan = [
    {
      id: '1',
      title: '300 gr ketan',
    },
    {
        id:'2',
        title:'1/2 buah kelapa yang tidak terlalu tua'
    },
    {
        id:'3',
        title:'garam 1 sendok teh'
    },
    {
        id:'4',
        title:'gula pasir 150 gr'
    },  
    {
        id:'5',
        title:'7 buah pisang raja yang sudah matang'
    
    }
  ];
const cara_pembuatan = [
    {
        id:'1',
        title:'kukus ketan yang sudah dicuci bersih sampai benar-benar matang'
    },
    {
        id:'2',
        title:'kupas kulit pisang lalu dipotong dengan ukuran sesuai selera'
    },
    {
        id:'3',
        title:'campurkan ketan yang sudah matang dengan gula pasir,garam dan kelapa parut'
    },
    {
        id:'4',
        title:'aduk-aduk bahan yang sudah di campur hingga merata'
    },
    {
        id:'5',
        title:'bungkus ketan yang sudah di bumbui dengan janur membentuk seperti lepet'
    },
    {
        id:'6',
        title:'lilitkan tali pada janur yang sudah berisi ketan hingga rapat'
    },
    {
        id:'7',
        title:'kukus bahan yang sudah dibungkus sampai benar-benar matang'
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

const Bantal  = (props,{navigation}) => {
    
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
                    <Image source={bantal} style={Css.thumbnail} />
                </View>

                <View style={{flex:3,justifyContent:"center",paddingLeft:20}}>
                    <Text style={Css.judulResep}>Kue Bantal Lombok</Text>
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

export default Bantal;
