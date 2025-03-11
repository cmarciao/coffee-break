import { useCallback, useEffect, useState } from "react";
import * as SplashScreen from 'expo-splash-screen';

import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

export function useSplashScreen() {
    const [appIsReady, setAppIsReady] = useState(false);
    const [fontsLoaded] = useFonts({
        'Poppins-400': require('../../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-500': require('../../assets/fonts/Poppins-Medium.ttf'),
        'Poppins-600': require('../../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-700': require('../../assets/fonts/Poppins-Bold.ttf')
    });

    useEffect(() => {
        if (fontsLoaded) {
            setAppIsReady(true);
        }
    }, [fontsLoaded]);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    return {
        appIsReady,
        onLayoutRootView
    };
}