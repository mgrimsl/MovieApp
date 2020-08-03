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
                    <View style={{flexDirection : 'column', flex : 2}}>
                        <Text style={styles.desc} numberOfLines={5}>{data.Plot}</Text>
                        <Text style={styles.seeMore}>See Full Description</Text>
                    </View>
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
        flex : 1,
        
        width : 150
    },
    desc :{
        padding : 4,
        fontSize : 16
    },
    seeMore :{
        fontSize : 10,
        color : 'gray',
        textAlign : "center"
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

