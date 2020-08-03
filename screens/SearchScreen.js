import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants'
import React from 'react';
import SearchBar from '../components/SearchBar'
import Row from '../components/Row'
import {querry, querryMovie} from '../database/Conn'
export default class SearchScreen extends React.Component{
    state = {
        results : [],
        response : "True",
        error : ''
    }
    static navigationOptions = ({ navigation }) => {
        return{
            headerTitle : () => (<SearchBar/>),
            headerLeft : () => (null),
            headerStyle : styles.headerStyle,
            headerTintColor : "#fff",
            headerTitleStyle : styles.headerTitleStyle,
            headerShown : false,
            shadowColor: 'transparent'
        }
    }
    handleData = (data) => {
        if(data.Response ==='True'){
            this.setState({
                results : data.Search,
                response : "True",
                error : ""})

        }else if (data.Response === 'False'){
            this.setState({
                response : "False",
                error : data.Error,
                results : [] })
        }
    }

    handleChangeText = (input) => {
        querry(input,this.handleData)
    }

    renderIf (condition, content){
        if (condition){
            return content;
        }else{
            return null;
        }
    }

    render(){
        return(
            <View style={styles.conatainer}>
                <View style={styles.searchBar}>
                    <SearchBar onChangeText={this.handleChangeText}/>
                </View>
                <Text style={styles.error}>{this.state.error}</Text>
                <ScrollView>
                    {this.state.results.map(results => 
                        <Row
                        key={results.imdbID}
                        movieData={results}
                        onPress={()=> querryMovie(results.imdbID,
                        this.props.navigation.navigate
                        )}/>
                    )}
                </ScrollView>
                
            </View>
        )
    }

}

const styles = StyleSheet.create({
    conatainer :{
        flex: 1,
        backgroundColor : 'black' 
    },
    headerStyle : {
        backgroundColor : 'black'
    },
    headerTitleStyle : {
        fontWeight : 'bold'
    },
    searchBar : {
        paddingTop : Constants.statusBarHeight
    },
    error : {
        color : 'white',
        fontSize : 18,
        padding: 4,
        paddingLeft : 10,
        fontWeight : 'bold'
    },
})
