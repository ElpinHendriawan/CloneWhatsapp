import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Splash,Home,Dodol,PutuAyu,Bantal,Cerorot,Tarek} from '../pages';

const Stack = createStackNavigator();

const Router =()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} options={{
                headerShown:false}}/>
            <Stack.Screen name="Dodol" component={Dodol} options={{
                headerShown:false}} />
            <Stack.Screen name="PutuAyu" component={PutuAyu} options={{
                headerShown:false}} />
            <Stack.Screen name="Bantal" component={Bantal} options={{
                headerShown:false}} />
            <Stack.Screen name="Cerorot" component={Cerorot} options={{
                headerShown:false}}/>
            <Stack.Screen name="Tarek" component={Tarek} options={{
                headerShown:false}}/>
            <Stack.Screen name="Home" component={Home} options={{
                headerShown:false
            }} />
        </Stack.Navigator>
    );
};

export default Router; 