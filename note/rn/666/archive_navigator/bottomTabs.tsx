import React from 'react';


import { View , Text, Platform, StyleSheet } from 'react-native';

import {  NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '@/pages/home';
import TimeLine from '@/pages/find';
import Listen from '@/pages/listen';
import Mine from '@/pages/mine';


export type BottomTabParameters = {

    Home: undefined;
    Listen: undefined;
    Find: undefined;
    Account: undefined;
    


};



const Tab = createBottomTabNavigator<BottomTabParameters>();




class BottomTabs extends React.Component{



    render(){

        return (
            <NavigationContainer>

                <Tab.Navigator screenOptions={{
                    tabBarActiveTintColor:'#f86442',
                    tabBarInactiveTintColor: '#ffffff'
                }}>

                    <Tab.Screen name="Home" component={Home} options={{tabBarLabel: "首页"}}/>
                    <Tab.Screen name="Listen" component={Listen}  options={{tabBarLabel: "听"}}/>
                    <Tab.Screen name="Find" component={TimeLine}  options={{tabBarLabel: "看"}}/>
                    <Tab.Screen name="Account" component={Mine}  options={{tabBarLabel: "账户"}}/>

                </Tab.Navigator>

            </NavigationContainer>
        );




    };



}


export default BottomTabs;









// f86442, 橘黄色


