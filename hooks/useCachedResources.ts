import * as Font from 'expo-font'
import {FontAwesome} from '@expo/vector-icons'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect, useState } from 'react'

export default function useCachedResources (){
    const [isLoading, setisLoading] = useState(false)

    useEffect(()=>{
        async function loadResourcesAndDataAsync(){
            try{
                SplashScreen.preventAutoHideAsync()
                await Font.loadAsync({
                    PlusJakartaRegular:require('../assets/fonts/PlusJakartaSans-Regular.ttf'),
                    PlusJakartaBold:require('../assets/fonts/PlusJakartaSans-Bold.ttf'),
                    PlusJakartaMedium:require('../assets/fonts/PlusJakartaSans-Medium.ttf'),
                    PlusJakartaBoldItalic:require('../assets/fonts/PlusJakartaSans-BoldItalic.ttf'),
                    PlusJakartaExtraBold:require('../assets/fonts/PlusJakartaSans-ExtraBold.ttf'),
                    PlusJakartaSans:require('../assets/fonts/PlusJakartaSans-Bold.ttf'),
                    ...FontAwesome.font
                })
            }
            catch(e){alert(e)}
            finally{
                setisLoading(true)
                SplashScreen.hideAsync()
            }
        }
        loadResourcesAndDataAsync()
    },[])
    return isLoading
}

