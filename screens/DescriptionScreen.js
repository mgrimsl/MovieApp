import { View, Text, Button, StyleSheet} from 'react-native';
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
        <View style={{flex:1}}>
            <Text>{this.props.navigation.getParam("Desc" , " None ")}</Text>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    headerStyle : {
        backgroundColor : 'black'
    },
    headerTitleStyle : {
        fontWeight : 'bold'
    },
    Top : {
        flex:1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center' 
    },
    Middle : {
        flex : 1,
        backgroundColor : 'yellow'
    },
    Bottom : {
        flex:1,
        backgroundColor: 'blue',
    }
})