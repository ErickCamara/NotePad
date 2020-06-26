import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import CodePush from 'react-native-code-push';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import './ReactotronConfig';

import Welcome from './pages/Welcome';
import Home from './pages/Home';
import Create from './pages/Create';
import Edit from './pages/Edit';

const AppStack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#ccf0f5" />
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <AppStack.Screen name="Welcome" component={Welcome} />
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Create" component={Create} />
        <AppStack.Screen name="Edit" component={Edit} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(App);
