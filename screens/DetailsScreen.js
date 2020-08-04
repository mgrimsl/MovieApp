import { View, Text, Button, StyleSheet, Image } from 'react-native';
import React from 'react';
import {querry, querryMovie} from '../database/Conn'
import ShowMore from '../components/ShowMore'
import Ratings from '../components/Ratings'
import InfoPlate from '../components/InfoPlate.js'


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
      //  console.log(data)
        return(
            <View style={styles.container}>
                <View style={styles.top}>
                    <Image style={styles.poster} source={{uri : data.Poster}}/>
                    <ShowMore plot={data.Plot} onPress={()=>this.props.navigation.navigate('Description',{'Desc' : data.Plot})}/>
                </View>
                <View style={styles.middle}>
                    {data.Ratings.map((Rating) => (
                        <Ratings  key={Rating.Source}Rating={Rating}/>
                    ))}
                </View>
                <View style={styles.bottom}>

                    <InfoPlate title={'Actors: '} content={data.Actors}/>
                    <InfoPlate title={'Director: '} content={data.Director}/>
                    <InfoPlate title={'Writer: '} content={data.Writer}/>

                </View>
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
        backgroundColor : 'black'
    },
    poster :{
        flex : 1,
        width : 150,
        marginBottom : 32
    },
    middle: {
        flex : .5,
        flexDirection: 'row',
        backgroundColor : 'black',
        borderBottomColor : 'gray',
        borderBottomWidth : 1
      
    },
    bottom : {
        flex: 1,
        backgroundColor : 'black',
        
    },

})

