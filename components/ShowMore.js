import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';

export default class ShowMore extends React.Component {
    state ={
        showMoreButton : false
    }
    

    renderIf(condition, content){
        if(condition){
            return content
        }else{
            return null
        }
    }

    render(){
    const NUM_OF_LINES = 10;
    
    return (
    
    <View style={styles.container}>
        <Text
        style={styles.desc}
        numberOfLines={NUM_OF_LINES}
        onTextLayout={({ nativeEvent: { lines } }) =>
        this.setState({ showMoreButton: lines.length === NUM_OF_LINES })}
        >
            {this.props.plot}
        </Text>
        {this.renderIf(this.state.showMoreButton,
        <Text style={styles.seeMore}
        onPress={this.props.onPress}>
            ShowMore
        </Text>)}
    </View>
    )
    }
}



const styles = StyleSheet.create({
    container : {
        flex : 2,
        flexDirection : 'column',
        paddingLeft : 10
    },
    desc :{
        fontSize : 16,
        color : 'white'
    },
    seeMore :{
        fontSize : 10,
        color : 'gray',
        textAlign : "center"
    }
})