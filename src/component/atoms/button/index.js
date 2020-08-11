import React from 'react';
import {Text,TouchableOpacity} from 'react-native';

const Button =({onPress})=>{
    return(
        <TouchableOpacity style={{
            fontSize:10,
            backgroundColor: '#A55EEA',
            borderRadius:25,
            padding:7,
            marginTop:5,
            alignItems:'center'
          }} onPress={onPress} >

            <Text style={{color:'white'}}>Detail</Text> 
        </TouchableOpacity>
    )
}

export default Button;