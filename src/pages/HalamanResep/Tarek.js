import React from 'react';
import { Text, View, StyleSheet,Image, ScrollView, SafeAreaView,FlatList } from 'react-native';
import tarek from "../../assets/img/tarek.jpg";

const bahan = [
    {
      id: '1',
      title: 'tepung beras',
    },
    {
        id:'2',
        title:'santan kelapa'
    },
    {
        id:'3',
        title:'gula merah yang dicampur sedikit sirih'
    },
    {
        id:'4',
        title:'1 sdt garam'
    
    
    }
  ];
const cara_pembuatan = [
    {
        id:'1',
        title:'kukus tepung beras yang sudah di bentuk bulat sampai matang'
    },
    {
        id:'2',
        title:'uleni dengan santan kelpa hingga halus'
    },
    {
        id:'3',
        title:'campur dengan santan keelapa dan gula merah dan di campur dengan sirih sebagai perenyah'
    },
    {
        id:'4',
        title:'kemudian bentuk dengan cetakan dan kue tarek siap di goreng'
    
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

const Tarek  = (props,{navigation}) => {
    
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
                <Image source={tarek} style={Css.thumbnail} />
            </View>

            <View style={{flex:3,justifyContent:"center",paddingLeft:20}}>
                <Text style={Css.judulResep}>Kue Tareks</Text>
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

export default Tarek;
