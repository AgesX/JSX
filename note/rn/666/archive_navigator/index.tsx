import React from 'react';


import { View , Text, Platform, StyleSheet } from 'react-native';

import {  NavigationContainer } from '@react-navigation/native';

// NavigationContainer,

// 管理整个导航树，并包含导航状态


import { CardStyleInterpolators, createStackNavigator , HeaderStyleInterpolators, StackNavigationProp  } from '@react-navigation/stack';

// createStackNavigator 函数

import Home from '@/pages/home';
import Detail from '@/pages/detail';



// 声明一个类型


// 作为一个泛型使用


// type,  类型别名
export type RootStackPramaList = {
    home: undefined;
    detail: {
        id: number
    };
}


export type RootStackNavigation = StackNavigationProp<RootStackPramaList>


let StackDeng = createStackNavigator<RootStackPramaList>()


/*
StackDeng 对象，包含两个 react 组件
{

    Navigator, 

    Screen （ Navigator 组件的子组件， 用来定义路由 ） ( 也就是，界面 )

}


*/

class Navigator extends React.Component{


    render(){

        // 详情页，在这个堆栈式，导航器里面

        // 跳转，需要嵌套，

        // 把堆栈式，导航器
        // 嵌套到标签导航器，里面来
        console.log('111');
        return (

            <NavigationContainer>

                <StackDeng.Navigator headerMode="float" screenOptions={{ 
                    headerTitleAlign: 'left',
                    headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
                    cardStyleInterpolator:  CardStyleInterpolators.forBottomSheetAndroid,
                    gestureEnabled: true,
                    gestureDirection: "horizontal",
                    headerStyle: {
                        ...Platform.select({
                            android:{
                                // 运行在 android 设备上，
                                // 走这里



                                // 下面， 模拟 iOS 的阴影
                                elevation: 0  ,      //   海拔
                                borderBottomWidth:  StyleSheet.hairlineWidth

                            },
                            ios:{

                            }
                        })
                    }
                }}  >

                    <StackDeng.Screen options={{ headerTitle: 'Marching'}} name="Front Page: Home" component={ Home }/>

                    <StackDeng.Screen name="Second: Detail" component={ Detail }/>

                </StackDeng.Navigator>
            </NavigationContainer>
        )



    }
}






export default Navigator;







//  headerMode="float"
//  所有导航界面， 共用一个标题栏
//  iOS 的样式






//  headerMode="screen"
//  所有导航界面， 都用各自的标题栏
//  Android 的样式








//  把标题栏，搞消失
//  headerMode="none"






//  headerStyleInterpolator: HeaderStyleInterpolators.forUIKit
//  标题栏的动画属性







// cardStyleInterpolator:  CardStyleInterpolators.forBottomSheetAndroid
// 内容卡片的动画效果





//  gestureEnabled: true
//  开启安卓端的手势系统








// gestureDirection: "horizontal"
// 修改安卓端的手势方向









// iOS 是阴影

// Android 是投影

// Android 的光源，不可变的





















/*

// 头部样式
headerStyle: {



                        // 平台的选择
                        ...Platform.select({
                            
                        })
                    }
                    
                    
                    
                    
                    */