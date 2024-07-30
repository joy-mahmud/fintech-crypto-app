import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator,TransitionPresets } from '@react-navigation/stack'
import SplashScreen from '../auth/SplashScreen'
import WelcomeScreen from '../auth/WelcomeScreen'
import LoginScreen from '../auth/LoginScreen'
import RegisterScreen from '../auth/RegisterScreen'
const Stack = createStackNavigator()
const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown:false,
        ...TransitionPresets.SlideFromRightIOS,
        animationEnabled:true,
        gestureEnabled:true,
        gestureDirection:'horizontal'
        }}>
        <Stack.Screen name='splash' component={SplashScreen}/>
        <Stack.Screen name='welcome' component={WelcomeScreen}/>
        <Stack.Screen name='login' component={LoginScreen}/>
        <Stack.Screen name='register' component={RegisterScreen}/>
    </Stack.Navigator>
  )
}

export default AuthNavigation