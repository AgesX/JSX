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
        const styleX = { fontSize: 20 , color: 'red',  backgroundColor: 'yellow', height: 350};
        return (
            <View style={styles.container}>
                <Text style={styleX} >
                    Haha ha
                </Text>
                <Text style={{ fontSize: 20 , color: 'red',  backgroundColor: 'white', height: 150}} >
                    Haha ha
                </Text>
            </View>
        )


    }


}




// StyleSheet, 管理样式对象

const styles = StyleSheet.create({
    container: {
      width: 200,
      height: '80%',
      backgroundColor: 'red',
      backgroundColor: 'green',
    },

  });


// 每一个 js 文件，就是一个模块 module

// 一个模块，导出的内容

// 其他模块，才能访问

export default App;


// RN 中，一切皆组件

// 页面是组件
// 按钮是组件， 输入框是组件


// 能看到的，都是组件
