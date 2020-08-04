import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { withOrientation } from 'react-navigation';

export default InfoPlate = (props) => (
    <View>
        <View style={styles.container}>
            <Text style={styles.title} numberOfLines={1}>{props.title}</Text> 
            <Text style={styles.content}>{props.content}</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        borderBottomWidth : .2,
        borderColor : "#3b3b3b"
    },
    title : {
        color : 'white',
        paddingLeft : 10,
        padding : 5,
        fontSize : 15,
        borderColor : 'black',
        borderBottomWidth : 1,
    },
    content : {
        color : 'gray',
        paddingLeft : 10,
        padding : 5,
        fontSize : 15,
    }
})