import { useSplashScreen } from "@/hooks/useSplashScreen";
import { Container } from "./styles";
import { UploadImage } from "@/screens/upload-image";

export function Main() {
    const { appIsReady, onLayoutRootView } = useSplashScreen();

    if (!appIsReady) {
        return null;
    }

    return (
        <Container onLayout={onLayoutRootView}>
            <UploadImage />
        </Container>
    )
}