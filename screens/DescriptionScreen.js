import { View, Text, Button, StyleSheet} from 'react-native';
import Constants from 'expo-constants'
import React from 'react';

export default class DescriptionScreen extends React.Component{ 
    static navigationOptions = ({ navigation }) => {
        return{
            title : 'Description',
            headerStyle : styles.headerStyle,
            headerTintColor : "#fff",
            headerTitleStyle : styles.headerTitleStyle,
        }
    }

    Title = "My Movie67"

    render(){
        return( 
        <View style={styles.constainer}>
            <Text style={styles.text}>{this.props.navigation.getParam("Desc" , " None ")}</Text>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    constainer : {
        flex : 1,
        backgroundColor : 'black'
    },
    text :{
        paddingTop : Constants.statusBarHeight,
        color : 'white',
        padding : 7,
        fontSize : 16
    }
})