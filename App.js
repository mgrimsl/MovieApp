import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen'
import SearchScreen from './screens/SearchScreen';




const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Details : DetailsScreen,
  Search : SearchScreen
  },
  {
    initialRouteName : 'Home'
  }
);

export default createAppContainer(AppNavigator);