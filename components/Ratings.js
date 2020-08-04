import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';

export default class Ratings extends React.Component {


    renderIf(condition, content){
        if(condition){
            return content
        }else{
            return null
        }
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.value}>{this.props.Rating.Value}</Text>
                <Text style={styles.source}>{this.props.Rating.Source}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    },
    value :{
        color : 'white',
        padding : 4,
        fontSize : 32,
        fontWeight : 'bold',
    },
    source :{
        fontSize : 14,
        textAlign : 'center',
        color : 'white'
    }
})