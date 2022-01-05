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


function getMovie() {
    // fetch 函数，
    // 返回一个 promise 对象


    return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((data) => data.movies)
    .catch((err) => {
        console,
        log(err);
    });

}


export default class App extends React.Component { // FlatList,   data 接收一个数组

    

    // state 等价于，另外一种
    constructor(props){
        super(props);
        this.state = {
            movieStored: [],
        };

    }


    films() {
        // fetch 函数，
        // 返回一个 promise 对象


        return fetch('https://facebook.github.io/react-native/movies.json')
        .then(
            (response) => 
            { return this.movieStored = response.json() ; }
        )
        .then(
            (data) => 
            { 
                this.setState({
                    movieStored: data.movies,
                }); 
                console.log( '---      ---  this.movieStored   --     ---' , data.movies);
            }
        )
        .catch((err) => {
            console.log(err);
        });

    }


    tapBtnX = () => {
        this.films();
    }


    itemShow = ({item}) => {


        return (
            <Text style={
                styles.txtMini
            }>
                {item.title} , {item.releaseYear}
            </Text>
        )


    }






    componentDidMount(){


        this.films();


    }








    render() {
        return (
            <View style={
                styles.container
            }>
                <TouchableOpacity style={
                        styles.btn
                    }
                    onPress={
                        this.tapBtnX
                }>
                    <Image source={
                        require('./src/search.png')
                    }/>

                    <Text style={
                        styles.txt
                    }>
                        冲 冲    冲
                    </Text>
                </TouchableOpacity>
                <FlatList data={
                         this.state.movieStored
                    }
                    renderItem={
                        this.itemShow
                    }/>
            </View>
        )

    }

}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'red'
    },
    btn: {
        backgroundColor: 'white',
        height: 300
    },
    txt: {
        color: 'red',
        fontSize: 50
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








































