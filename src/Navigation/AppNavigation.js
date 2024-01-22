import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../Screens/Splash';
import Main from '../Screens/Main';
import ViedoScreen from '../Screens/ViedoScreen';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="VideoScreen"
          component={ViedoScreen}
          options={{headerShown: false, headerTintColor: 'black'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
