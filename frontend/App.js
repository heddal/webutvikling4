import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';


const TabNavigator = createBottomTabNavigator(
  { Home: { screen: HomePage, 
          navigationOptions: {
            tabBarIcon: <Icon name = "home" size = {36} />,
          }
  },
  Explore: { screen: ExplorePage,
            navigationOptions: {
              tabBarIcon: <Icon name = "search" size = {36} />
            } }
        }, 
  {tabBarOptions: {
  activeBackgroundColor : '#3f51b5',
  inactiveBackgroundColor : 'rgba(63, 81, 181, .5)',
  showLabel : false,
}});

export default createAppContainer(TabNavigator);
