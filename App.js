import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen'
import SearchScreen from './screens/SearchScreen';
import DescriptionScreen from './screens/DescriptionScreen.js'





const DetailsStack = createStackNavigator({
  Details : DetailsScreen,
  Description : DescriptionScreen
},
{
  headerTitle : 'Hello',
  mode : 'modal'
});

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Details : DetailsStack,
  Search : SearchScreen
  },
  {
    initialRouteName : 'Home'
  }
);

export default createAppContainer(AppNavigator);
