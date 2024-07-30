import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigation from './tabNavigation'
import AuthNavigation from './AuthNavigation'

const RootNavigation = () => {
    const [session, setSession] = useState(false)
    const Stack = createStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
                ...TransitionPresets.SlideFromRightIOS,
                animationEnabled: true,
                gestureEnabled: true,
                gestureDirection: 'horizontal'
            }}

            >
                {
                    session ? (
                        <Stack.Screen name='TabNavigation' component={TabNavigation} />
                    ) : (
                        <Stack.Screen name='AuthNavigation' component={AuthNavigation} />
                    )
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation