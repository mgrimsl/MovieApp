import { View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';

export default class HomeScreen extends React.Component{ 
    
    
    static navigationOptions = ({ navigation }) => {
        return{
            title : 'Home',
            headerStyle : styles.headerStyle,
            headerTintColor : "#fff",
            headerTitleStyle : styles.headerTitleStyle,
        }
    }
    

    Title = "My Movie67"

    render(){
        return( 
        <View style={{flex:1}}>
            <View style={styles.Top}>
            <Text>Home Screen</Text>
            <Button title="Search" onPress={()=>this.props.navigation.navigate('Search')}/>
            </View>
            <View style={styles.Middle}>

            </View>
            <View style={styles.Bottom}>

            </View>
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