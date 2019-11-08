import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import { Icon } from "react-native-elements";
import HomePage from "./pages/HomePage";
import ExplorePage from "./pages/ExplorePage";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { View } from "react-native";

const store = createStore(rootReducer, applyMiddleware(thunk));
// const composeEnhancers =
//   typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//     : compose;
//
// const enhancer = composeEnhancers(applyMiddleware(thunk));
// const store = createStore(rootReducer, enhancer);

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomePage,
      navigationOptions: {
        tabBarIcon: <Icon name="home" size={36} />
      }
    },
    Explore: {
      screen: ExplorePage,
      navigationOptions: {
        tabBarIcon: <Icon name="search" size={36} />
      }
    }
  },
  {
    tabBarOptions: {
      activeBackgroundColor: "#3f51b5",
      inactiveBackgroundColor: "rgba(63, 81, 181, .5)",
      showLabel: false
    }
  }
);

const AppContainer = createAppContainer(TabNavigator);

export default () => (
  <Provider store={store}>
    <View style={{ flex: 1 }}>
      <AppContainer style={{ margin: 100 }} />
    </View>
  </Provider>
);
