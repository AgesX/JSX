import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View
} from 'react-native';

// extends , 继承自

export default class App extends React.Component {
    render() {
        return (
            <View style={
              {flexDirection: 'row', width: 50,
              height: 50, backgroundColor:'powderblue'}
            }><View style={
                    {
                        width: 50,
                        height: 50,
                        backgroundColor:'powderblue'
                    }
                }/><View style={
                    {
                        width: 50,
                        height: 50,
                        backgroundColor:'skyblue'
                    }
                }/><View style={
                    {
                        width: 50,
                        height: 50,
                        backgroundColor:'steelblue'
                    }
                }/></View>
        )

    }

}

// 每一个 js 文件，就是一个模块 module

// 一个模块，导出的内容

// 其他模块，才能访问


// RN 中，一切皆组件

// 页面是组件
// 按钮是组件， 输入框是组件


// 能看到的，都是组件
