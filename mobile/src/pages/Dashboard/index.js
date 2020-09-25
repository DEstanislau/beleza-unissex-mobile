import React from 'react';

import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import DashboardList from './DashobardList';
import DashboardDetails from './DashboardDetails';

const Stack = createStackNavigator();

export default function Dashboard() {
  return (
    <Stack.Navigator
      initialRouteName="DashboardList"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="DashboardList" component={DashboardList} />
      <Stack.Screen name="DashboardDetails" component={DashboardDetails} />
    </Stack.Navigator>
  );
}
