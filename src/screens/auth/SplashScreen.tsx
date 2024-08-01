import { View, Text } from 'react-native'
import React from 'react'
import { useEffect } from 'react'
import Animated, { FadeInRight } from 'react-native-reanimated'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useColorScheme } from 'nativewind'
import { Image } from 'expo-image'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';

const SplashScreen = () => {
    const blurhash =
        '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

    const { colorScheme, toggleColorScheme } = useColorScheme()
    const { navigate }: NavigationProp<SplashNavigationType> = useNavigation()
    return (
        <SafeAreaView className='flex-1 justify-center items-center bg-white'>
            <View className='w-full px-4 items-center'>
            <Animated.View entering={FadeInRight.duration(100).delay(200).springify()}
                className='flex-row justify-center items-center mb-2'>
                <View className='pr-2'>
                    <View className='h-20 w-20 overflow-hidden'>
                        <Image
                            source={require('../../../assets/images/logo.png')} className='h-full w-full'
                            contentFit='cover'
                            placeholder={blurhash}
                            transition={1000}
                        />
                    </View>
                </View>
            </Animated.View>
            <Animated.View
                entering={FadeInRight.duration(100).delay(200).springify()}
                className='flex-row justify-center items-center'>
                <Text className='uppercase leading-[60px] text-neutral-600 text-xl'>stacks </Text>
                <Text className='uppercase leading-[60px] text-[#41eb5b] text-xl'>crypto</Text>
            </Animated.View>
            </View>
        </SafeAreaView>
    )
}

export default SplashScreen