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
              styles.container
            }><View style={
                    {
                        width: 50,
                        height: 150,
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
const styles = StyleSheet.create({

// 没有给，最外层的 View, 设置高度
// 则其高度，自适应于，其里面的元素
  container:  {
    backgroundColor:'red',
    height: 400,
    justifyContent: 'flex-start',
    justifyContent: 'center',

    // 主轴
    flexDirection: 'row',

    flexDirection: 'column',
    justifyContent: 'flex-end',
    justifyContent: 'space-around',
    justifyContent: 'space-between',
    justifyContent: 'space-evenly',
  },











});
// 每一个 js 文件，就是一个模块 module

// 一个模块，导出的内容

// 其他模块，才能访问


// RN 中，一切皆组件

// 页面是组件
// 按钮是组件， 输入框是组件


// 能看到的，都是组件
