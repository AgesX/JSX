import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
    Image
} from 'react-native';

// extends , 继承自

export default class App extends React.Component {

    render() {
        return (
            <View style={
                styles.container
            }>
                <Text style={
                    styles.txtMini
                }>
                    不想滚动的 content
                </Text>
                <ScrollView style={
                    styles.none
                }>
                <Text style={
                    styles.txt
                }>
                    一般，准确比力量更加重要 （ 这就是侦探小说 ， 法制社会嘛 ）
                </Text>
                <Text style={
                    styles.txt
                }>
                    seed is strong
                </Text>
                <Text style={
                    styles.txt
                }>
                    我将粉碎一切阻碍
                </Text>

                </ScrollView>
                <Text style={
                    styles.txtMini
                }>
                    不想滚动的底部 content hip
                </Text>
                <ScrollView style={
                    styles.none
                }>
                    {/*
                            对比参照
                    
                    */} 
                </ScrollView>
            </View>
        )

    }

}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt: {
        color: 'skyblue',
        justifyContent: 'center',
        fontSize: 110
    },
    txtMini: {
        color: 'white',
        justifyContent: 'center',
        fontSize: 50
    },
    comment: {
        display: 'none'
    },
    none: {},
});
