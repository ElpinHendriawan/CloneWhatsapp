import React from 'react';
import { Text, View, StyleSheet,Image, ScrollView, SafeAreaView,FlatList } from 'react-native';
import dodol from "../../assets/img/dodol.jpg";

const bahan = [
    {
      id: '1',
      title: '1 ons rumput laut kering',
    },
    {
        id:'2',
        title:'800 gram gula pasir'
    },
    {
        id:'3',
        title:'200 gram tepung ketan'
    },
    {
        id:'4',
        title:'2 sdm santan kelapa'
    },  
    {
        id:'5',
        title:'3 sdm essence'
    },
    {
        id:'6',
        title:'1 sdm tepung terigu'
    },
    {
        id:'7',
        title:'1 sdt vanilli'
    
    }
  ];
const cara_pembuatan = [
    {
        id:'1',
        title:'rendam rumput laut ke dalam air,kemudian masukan dalam air mendidih'
    },
    {
        id:'2',
        title:'didihkan adonan santan dan tepung,kemudian masukkan rumput laut sambil diaduk hinga kalis'
    },
    {
        id:'3',
        title:'sambil diaduk,masukkan gula,garam,vanilli dan essence,aduk hinnga rata dan kalis'
    },
    {
        id:'4',
        title:'setelah matang tuangkan adonan dalam nampan.lalu dinginkan kurang lebih 1 jam'
    },
    {
        id:'5',
        title:'bungkus menggunakan plastik dan tali'
    },
    {
        id:'6',
        title:'dodol rumput laut siap dinikmati'
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

const Dodol = (props,{navigation}) => {
    
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
                <Image source={dodol} style={Css.thumbnail} />
            </View>

            <View style={{flex:3,justifyContent:"center",paddingLeft:20}}>
                <Text style={Css.judulResep}>Kue Dodol Rumput Laut</Text>
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

export default Dodol;
