import React from 'react';
import MainScreen from './screens/MainScreen';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={MainScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

