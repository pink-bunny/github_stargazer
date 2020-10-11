import React from 'react';
import { Provider } from 'react-redux';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import store from './src/state/store';
import Repositories from './src/views/Repositories';
import AddRepository from './src/views/AddRepository';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="Home"
            component={Repositories}
          />
          <Stack.Screen
            name="AddRepository"
            component={AddRepository}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
