import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from 'react-native-vector-icons'
import { styles, colors } from './styles/styles';
import ChestAndTris from './screens/exercises/ChestAndTris';
import BackAndBis from './screens/exercises/BackAndBis';
import Legs from './screens/exercises/Legs';
import Shoulders from './screens/exercises/Shoulders';

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Chest & Tris"
          component={ChestAndTris}
          options={{
            tabBarActiveTintColor: colors.navyBlue,
            tabBarIcon: (tabInfo) => {
              return (
                <MaterialIcons name="fitness-center" size={24} color={tabInfo.focused ? colors.navyBlue : "#8e8e93"} />
              )
            }
          }}
        />
        <Tab.Screen
          name="Back & Bis"
          component={BackAndBis}
          options={{
            tabBarActiveTintColor: colors.navyBlue,
            tabBarIcon: (tabInfo) => {
              return (
                <MaterialIcons name="fitness-center" size={24} color={tabInfo.focused ? colors.navyBlue : "#8e8e93"} />
              )
            }
          }}
        />
        <Tab.Screen
          name="Legs"
          component={Legs}
          options={{
            tabBarActiveTintColor: colors.navyBlue,
            tabBarIcon: (tabInfo) => {
              return (
                <MaterialIcons name="fitness-center" size={24} color={tabInfo.focused ? colors.navyBlue : "#8e8e93"} />
              )
            }
          }}
        />
        <Tab.Screen
          name="Shoulders"
          component={Shoulders}
          options={{
            tabBarActiveTintColor: colors.navyBlue,
            tabBarIcon: (tabInfo) => {
              return (
                <MaterialIcons name="fitness-center" size={24} color={tabInfo.focused ? colors.navyBlue : "#8e8e93"} />
              )
            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

