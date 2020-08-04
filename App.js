import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, HeaderTitle } from 'react-navigation-stack';

import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen'
import SearchScreen from './screens/SearchScreen';
import DescriptionScreen from './screens/DescriptionScreen.js'


const MainStack = createStackNavigator({
  Home : {
    screen : HomeScreen
  },
  Search : {
    screen : SearchScreen
  },
  Details : {
    screen : DetailsScreen
  }
},
{
  initialRouteName : 'Home',
});

const RootStack = createStackNavigator({
  Main : {
    screen : MainStack
  },
  Description : {
    screen : DescriptionScreen
  }
  },
  {
    mode : 'modal',
    headerMode : 'none'
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component{
  render(){
    return <AppContainer/>
  }
}