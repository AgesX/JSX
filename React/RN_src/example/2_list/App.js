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
    FlatList
} from 'react-native';

// extends , 继承自

export default class App extends React.Component {


    // FlatList,   data 接收一个数组



    render() {
        return (
            <View style={
                styles.container
            }>
                <FlatList style={
                        styles.list
                    }
                    data={
                        [
                            {
                                'k': 'lizhi'
                            }, {
                                'k': 'luSound'
                            }
                        ]
                    }
                    renderItem={
                        ({item}) => <Text style={
                            styles.txt
                        }>  {item.k} </Text>
                    }/>
                <FlatList style={
                        styles.list
                    }
                    data={
                        [
                            {
                                'k': 'terminate'
                            }, {
                                'k': 'fire'
                            }
                        ]
                    }
                    renderItem={
                        ({item}) => { 
                            return <Text style={
                                         styles.txt
                                     }>come on  {item.k}
                                    </Text>
                         }
                    }/>
            </View>
        )

    }

}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'red',
    },
    list: {
        backgroundColor: 'white',
    },
    txt: {
        color: 'red',
        fontSize: 110,
    },
    txtMini: {
        color: 'white',
        fontSize: 50
    },
    comment: {
        display: 'none'
    },
    none: {}
});




















