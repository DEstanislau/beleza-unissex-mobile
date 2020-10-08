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
import Reset from '../pages/Reset';

import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
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
          <Stack.Screen name="Reset" component={Reset} />
        </Stack.Navigator>
      ) : (
        <TabNav.Navigator tabBar={props => <TabBar {...props} />}>
          <TabNav.Screen name={'Home'} component={Home} />

          <TabNav.Screen name={'Dashboard'} component={Dashboard} />

          <TabNav.Screen name={'Profile'} component={Profile} />
        </TabNav.Navigator>
      )}
    </NavigationContainer>
  );
}
