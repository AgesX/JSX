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
    Image,
} from 'react-native';

// extends , 继承自

export default class App extends React.Component {

    tapBtnX = () => {
        alert('ha ha  haa');
    }


    render() {
        return (
            <View style={
                styles.container
            }>

                    {/* 

                                这里的 this,

                                就是  class App
    
                      */}
                <TouchableOpacity onPress={this.tapBtnX}>
                    <Image  source={require('./src/search.png')}/>

                    <Text style={
                            styles.txt
                          }>
                        冲 冲    冲
                    </Text>
                </TouchableOpacity>
            </View>
        )

    }

}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems:'center',
    },
    txt:{
        color: 'skyblue',
        justifyContent: 'center',
    },
});














