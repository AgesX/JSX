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
                    styles.itemZero
                }/><View style={
                    styles.itemOne
                }/><View style={
                    styles.itemTwo
                }/>
                <View style={
                    styles.itemZero
                }/><View style={
                    styles.itemOne
                }/><View style={
                    styles.itemTwo
                }/>
                <View style={
                    styles.itemZero
                }/><View style={
                    styles.itemOne
                }/><View style={
                    styles.itemTwo
                }/>

                <Text>One
                </Text>
                <Text>
                    and Two</Text>
                <Text>
                    Three
                </Text>
                <Text>
                    and Four
                </Text>
                <View>
                    <Text>
                        Five
                    </Text>
                    <Text>
                        and Six
                    </Text>
                    <Text>
                        % Seven
                    </Text>
                </View>
            </View>
        )

    }

}


const styles = StyleSheet.create({

    // 没有给，最外层的 View, 设置高度
    // 则其高度，自适应于，其里面的元素
    container: {
        backgroundColor: 'red',
        height: 400,

        // 主轴

        flexDirection: 'row',
        // justifyContent: 'space-evenly',
        justifyContent: 'center',

        alignItems: 'baseline', // 基线对齐
        flexDirection: 'row',
        flex: 1,
        // flex: -1,
        minHeight: 200,
        flexWrap: 'wrap',
        // flexWrap: 'wrap-reverse',
    },
    // flex 为负数， 与 minHeight / height


    // flex， 占据剩余的空间


    // css 中的，很多属性，会相互影响
    // 布局位置属性， 相互干涉


    itemZero: {
        width: 100,
        height: 150,
        backgroundColor: 'powderblue',
        // flex: 1,
        // flex: 0,
        // flex: -1,
    },


    // flex, 根据父视图

    // flex， 覆盖掉，宽度和高度的设置 （ 主轴方向上 ）

    // flex, 占据，主轴上的，剩余空间
    itemOne: {
        width: 50,
        height: 50,
        backgroundColor: 'skyblue',
        // flex: 2,
        // flex: 0,
    },


    // flex: 1，   代表， 百分百，
    // 相对，意义上

    itemTwo: {
        width: 70,
        height: 50,
        backgroundColor: 'steelblue',
        // flex: 4,
    }

});
// 每一个 js 文件，就是一个模块 module

// 一个模块，导出的内容

// 其他模块，才能访问


// RN 中，一切皆组件

// 页面是组件
// 按钮是组件， 输入框是组件


// 能看到的，都是组件
