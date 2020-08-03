import { View, Text, Button, StyleSheet, Image } from 'react-native';
import React from 'react';
import {querry, querryMovie} from '../database/Conn'


export default class DetailsScreen extends React.Component{
    
    static navigationOptions = ({ navigation }) => {
        return{
            title : navigation.getParam('Title','null'),
            headerStyle : styles.headerStyle,
            headerTintColor : "#fff",
            headerTitleStyle : styles.headerTitleStyle
        }
    }
  
  

    
    render(){
        const data = this.props.navigation.getParam("Data", {})
        console.log(data)
        return(
            <View style={styles.container}>
                <View style={styles.top}>
                    <Image style={styles.poster} source={{uri : data.Poster}}/>
                    <Text style={styles.desc} numberOfLines={4}>{data.Plot}</Text>
                </View>
                <View style={styles.middle}></View>
                <View style={styles.bottom}></View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    headerStyle : {
        backgroundColor : 'gray'
    },
    headerTitleStyle : {
        fontWeight : 'bold'
    },
    container : {
        flex : 1,
        backgroundColor : 'black'
    },
    top : {
        flex : 1,
        flexDirection : 'row',
        backgroundColor : 'red'
    },
    poster :{
        flexGrow : 1,
        width : 150
    },
    desc :{

    },
    middle: {
        flex : 1,
        backgroundColor : 'green'
    },
    bottom : {
        flex: 1,
        backgroundColor : 'yellow'
    }
})

