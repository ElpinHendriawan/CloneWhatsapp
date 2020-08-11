import React from 'react';
import {View} from 'react-native';
import {Button} from '../component';

const ActionButton =({onPress})=>{
    return(
      <View>
        <Button onPress={onPress} />
      </View>
    )
 }
 
 export default ActionButton;