import { View, Text, Button, StyleSheet, TouchableOpacity, Image, PickerIOSComponent } from 'react-native';
import React from 'react';

export default Row = (props) => (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
        <Image style={styles.image} source={{uri : props.movieData.Poster}}/>
        <View>
            <Text style={styles.title}>{props.movieData.Title}</Text>
            <Text style={styles.year}>{props.movieData.Year}</Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container : {   
        flexDirection : 'row',
        padding : 4
    },
    image : {
        height : 80,
        width : 54
    },
    title : {
        color : 'white',
        fontSize : 18,
        paddingLeft : 6
    },
    year : {
        color : 'gray',
        fontSize : 14,
        paddingLeft : 6
    }
})