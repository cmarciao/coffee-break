import { Image, ScrollView, View } from "react-native";
import { Text } from "@/components/text";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { LogoIcon } from "@/components/icons/logo-icon";
import { UploadIcon } from "@/components/icons/upload-icon";
import { ResultClassificationModal } from "@/components/result-classification-modal";
import { useUploadImage } from "./useUploadImage";
import { Container, Description, DragAndDrop, Form, Header } from "./styles";

export function UploadImage() {
    const {
        isOpenResultClassificationModal,
        imagePreviewUri,
        classifications,
        handleCloseResultClassificationModal,
        plantId,
        setPlantId,
        showSelectImagesOptions,
        handleOnSubmit,
        isSubmittingImage,
        isSubmitButtonValid,
    } = useUploadImage();

    return (
        <ScrollView>
            <Container>
                {isOpenResultClassificationModal && (
                    <ResultClassificationModal
                        isOpen={isOpenResultClassificationModal}
                        imagePreviewUri={imagePreviewUri!}
                        classifications={classifications}
                        onClose={handleCloseResultClassificationModal}
                    />
                )}

                <Header>
                    <LogoIcon />
                    <Text size={24} weight='600' >
                        coffee
                        <Text size={24} weight='600' color='#D6665f'>
                            break
                        </Text>
                    </Text>
                </Header>

                <Description>
                    <Text textAlign='center' weight='500' size={16}>
                        Descubra nosso inovador classificador de doenças de café!
                    </Text>
                    <Text textAlign='center'>
                        Detecte e controle doenças em suas plantas de café com nosso inovador classificador baseado em aprendizado de máquina.
                        Aumente a produtividade e mantenha suas plantas saudáveis. Experimente agora mesmo!
                    </Text>
                </Description>

                <Form>
                    <Input
                        label="Identificador da folha"
                        placeholder="Ex. 0122041"
                        placeholderTextColor='#AAA'
                        value={plantId}
                        keyboardType="numeric"
                        onChangeText={setPlantId}
                    />

                    <View>
                        <Text>Foto da folha</Text>
                        <DragAndDrop onPress={showSelectImagesOptions}>
                            {imagePreviewUri && (
                                <Image source={{ uri: imagePreviewUri }} style={{ width: '100%', height: 280 }} />
                            )}
                            {!imagePreviewUri && (
                                <>
                                    <UploadIcon />
                                    <Text weight='600'>Selecione uma imagem para fazer download</Text>
                                </>
                            )}
                        </DragAndDrop>
                    </View>

                    <Button
                        onPress={handleOnSubmit}
                        disabled={isSubmittingImage || !isSubmitButtonValid}
                    >
                        Enviar
                    </Button>
                </Form>
            </Container>
        </ScrollView>
    );
}