import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {useSelector} from 'react-redux';

import Started from '../pages/Started';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Home from '../pages/Home';
import Search from '../pages/Search';
import Dashboard from '../pages/Dashboard';
import Favorites from '../pages/Favorites';
import Profile from '../pages/Profile';

import TabBar from '~/Routes/TabNavigation';

const Stack = createStackNavigator();
const TabNav = createBottomTabNavigator();

export default function Router() {
  const signed = useSelector(state => state.auth.signed);

  return (
    <NavigationContainer>
      {!signed ? (
        <Stack.Navigator
          initialRouteName="PreLoad"
          screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}>
          <Stack.Screen name="Started" component={Started} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      ) : (
        <TabNav.Navigator
          tabBar={props => <TabBar {...props} />}
          tabBarOptions={{
            keyboardHidesTabBar: false,
          }}>
          <TabNav.Screen name={'Home'} component={Home} />
          <TabNav.Screen name={'Search'} component={Search} />
          <TabNav.Screen name={'Dashboard'} component={Dashboard} />
          <TabNav.Screen name={'Favorites'} component={Favorites} />
          <TabNav.Screen name={'Profile'} component={Profile} />
        </TabNav.Navigator>
      )}
    </NavigationContainer>
  );
}

// tabBarOptions={{
//   keyboardHidesTabBar: true,
//   activeTintColor: '#11969f',
//   inactiveTintColor: 'rgba(17, 150, 159, 0.6)',
//   activeBackgroundColor: '#fff',
//   iconStyle: {
//     backgroundColor: 'red',
//   },
//   tabStyle: {
//     borderRadius: 100,
//     height: 50,
//     width: 50,
//   },
//   style: {
//     borderTopColor: 'rgba(0, 0, 0, 0.1)',
//     backgroundColor: '#32a5ac',
//   },
// }}
