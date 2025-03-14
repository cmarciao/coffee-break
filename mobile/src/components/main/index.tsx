import { useSplashScreen } from "@/hooks/useSplashScreen";
import { Container } from "./styles";
import { UploadImage } from "@/screens/upload-image";
import Toast from "react-native-toast-message";
import { StatusBar } from 'react-native';

export function Main() {
    const { appIsReady, onLayoutRootView } = useSplashScreen();

    if (!appIsReady) {
        return null;
    }

    return (
        <Container onLayout={onLayoutRootView}>
            <UploadImage />

            <Toast
                topOffset={(StatusBar.currentHeight || 0) + 20}
                visibilityTime={1000 * 3}
            />
        </Container>
    )
}