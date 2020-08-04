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
    
    <View style={{flexDirection : 'column', flex : 2}}>
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
    desc :{
        padding : 4,
        fontSize : 16
    },
    seeMore :{
        fontSize : 10,
        color : 'gray',
        textAlign : "center"
    }
})