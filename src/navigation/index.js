import React, {Component} from 'react';
import {LogBox, StyleSheet, Easing, YellowBox, Animated} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Theme} from '@global';
import DrawerScreen from '../DrawerScreen';
import DashboardScreen from '../screens/deshboard';
import {
  TransitionPresets,
  HeaderStyleInterpolators,
  TransitionSpecs,
} from '@react-navigation/stack';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
YellowBox.ignoreWarnings(['']);


function DrawerContent() {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      drawerStyle={{width: '70%'}}
      drawerContent={(props) => <DrawerScreen {...props} />}>
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
    </Drawer.Navigator>
  );
}
function Router(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="Dashboard"
          component={DrawerContent}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Router;

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: Theme.PRIMARY_COLOR,
  },
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerTintColor: {
    color: '#fff',
  },
});
