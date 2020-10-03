import React from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import store from './src/state/store';
import Repositories from './src/views/Repositories';

const Stack = createStackNavigator();

const ProfileScreen = () => <Text>This is Jane profile</Text>;

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
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
