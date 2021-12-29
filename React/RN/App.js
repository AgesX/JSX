import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

// extends , 继承自

class App extends React.Component {


    render() {

        return (
            <View >
                <Text style={{ fontSize: 20 , color: 'red',  backgroundColor: 'yellow'}} >
                    Haha ha
                </Text>
                <Text style={{ fontSize: 20 , color: 'red',  backgroundColor: 'white'}} >
                    Haha ha
                </Text>
            </View>
        )


    }


}


// 每一个 js 文件，就是一个模块 module

// 一个模块，导出的内容

// 其他模块，才能访问

export default App;


// RN 中，一切皆组件

// 页面是组件
// 按钮是组件， 输入框是组件


// 能看到的，都是组件
