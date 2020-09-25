import React from 'react';

import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import SelectProvider from './SelectProvider';
import Details from './Details';
import SelectDate from './SelectDate';
import Confirm from './Confirm';

const Stack = createStackNavigator();

export default function Home() {
  return (
    <Stack.Navigator
      initialRouteName="SelectProvider"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="SelectProvider" component={SelectProvider} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="SelectDate" component={SelectDate} />
      <Stack.Screen name="Confirm" component={Confirm} />
    </Stack.Navigator>
  );
}
