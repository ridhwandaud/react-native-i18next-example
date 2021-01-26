import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import SettingScreen from './SettingScreen';

const Stack = createStackNavigator();

function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Setting" component={SettingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default App;