import { View, Text, Button, StyleSheet, TextInput, Image } from 'react-native';
import React from 'react';
import Magnifying from '../assets/magnifying.png'

export default class SearchBar extends React.Component {

    render(){
        return(
            <View style={styles.container}>
                <Image style={styles.image} source={Magnifying}/>
                <TextInput 
                    placeholder={'Search For Your Favorite Movies!'}
                    style={styles.input} 
                    onChangeText={this.props.onChangeText}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
   container : {
       flexDirection : 'row',
   },
   input : {
       marginLeft:7,
       paddingLeft : 6,
       backgroundColor : 'white',
       height : 40,
       width : 370,
       borderColor : 'gray',
       borderRadius : 6,
       borderWidth : 1,
       marginTop : 8
   },
   image : {
       padding : 10,
       marginTop : 15,
       marginLeft : 5
       
   }
})