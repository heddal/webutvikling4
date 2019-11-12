import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { View } from 'react-native'
import { setPage } from '../frontend/actions/SetPageAction'; 
import { connect } from 'react-redux';

const store = createStore(rootReducer, applyMiddleware(thunk))

const TabNavigator = createBottomTabNavigator(
  { Home: { screen: HomePage, 
          navigationOptions: {
            tabBarIcon: <Icon name = "home" size = {36} />,
          }
  },
  Explore: { screen: ExplorePage,
            navigationOptions: {
              tabBarIcon: <Icon name = "search" size = {36} />
            },
             }
        }, 
  {tabBarOptions: {
  activeBackgroundColor : '#3f51b5',
  inactiveBackgroundColor : 'rgba(63, 81, 181, .5)',
  showLabel : false,
}/*, defaultNavigationOptions: ({navigation}) => ({
  tabBarOnPress: ({ navigation , defaultHandler}) => {
    console.log('onPress: ', navigation.state.routeName);
    defaultHandler()  }
}) */

});

const AppContainer = createAppContainer(TabNavigator)
import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { View } from 'react-native'
import { setPage } from '../frontend/actions/SetPageAction'; 
import { connect } from 'react-redux';

const store = createStore(rootReducer, applyMiddleware(thunk))

const TabNavigator = createBottomTabNavigator(
  { Home: { screen: HomePage, 
          navigationOptions: {
            tabBarIcon: <Icon name = "home" size = {36} />,
          }
  },
  Explore: { screen: ExplorePage,
            navigationOptions: {
              tabBarIcon: <Icon name = "search" size = {36} />
            },
             }
        }, 
  {tabBarOptions: {
  activeBackgroundColor : '#3f51b5',
  inactiveBackgroundColor : 'rgba(63, 81, 181, .5)',
  showLabel : false,
}, defaultNavigationOptions: ({navigation}) => ({
  tabBarOnPress: ({ navigation , defaultHandler}) => {
    console.log('onPress: ', navigation.state.routeName);
    defaultHandler()  }
})

});

const AppContainer = createAppContainer(TabNavigator)



export default () => (<View style = {{flex: 1}}><AppContainer style={{margin: 100}}/></View>);