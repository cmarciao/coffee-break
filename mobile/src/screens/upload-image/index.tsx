import { useState } from "react";
import { ActionSheetIOS, Alert, Image, Platform, View } from "react-native";
import * as FileSystem from 'expo-file-system';
import { Text } from "@/components/text";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { LogoIcon } from "@/components/icons/logo-icon";
import { UploadIcon } from "@/components/icons/upload-icon";
import * as ImagePicker from 'expo-image-picker';
import { Container, Description, DragAndDrop, Form, Header } from "./styles";
import { api } from "@/services/api";
import axios, { AxiosError } from "axios";

export function UploadImage() {
    const [plantId, setPlantId] = useState<string>('');
    const [imagePreviewUri, setImagePreviewUri] = useState<string | null>(null);
    const [isSubmittingImage, setIsSubmittingImage] = useState<boolean>(false);

    async function test() {
        try {
            const response = await axios.get('http://192.168.100.68:5000/classifier');
            console.log({ response });
        } catch (error) {
            const err = error as AxiosError;
            console.log(err.cause);
            console.log(err.message);
            console.log(err.response);
        }
    }

    async function handleOnSubmit() {
        setIsSubmittingImage(true);
        const base64Image = await FileSystem.readAsStringAsync(imagePreviewUri!, {
            encoding: FileSystem.EncodingType.Base64,
        });
        try {
            const response = await api.post("/classifier", { plantId, base64Image })
            // setIsOpen(true);
            // setData(response.data);
            console.log({ response });
        } catch (error) {
            const err = error as AxiosError;
            console.log({ ...err })
            // console.log(error);
        } finally {
            setIsSubmittingImage(false);
        };
    }

    const openImagePicker = async (source: 'camera' | 'gallery') => {
        if (source === 'camera') {
            const { status } = await ImagePicker.requestCameraPermissionsAsync();
            if (status !== 'granted') {
                alert('Precisas de conceder permissão para acessar a câmara.');
                return;
            }
            const result = await ImagePicker.launchCameraAsync({
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (result.canceled) return;
            setImagePreviewUri(result.assets[0].uri);
        } else {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: 'images',
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (result.canceled) return;
            setImagePreviewUri(result.assets[0].uri);
        }
    };

    const showSelectImagesOptions = () => {
        if (Platform.OS === 'ios') {
            ActionSheetIOS.showActionSheetWithOptions(
                {
                    options: ['Cancelar', 'Tirar Foto', 'Escolher da Galeria'],
                    cancelButtonIndex: 0,
                },
                (buttonIndex) => {
                    if (buttonIndex === 1) openImagePicker('camera');
                    else if (buttonIndex === 2) openImagePicker('gallery');
                }
            );
        } else {
            Alert.alert(
                'Selecionar Imagem',
                'Escolha uma opção:',
                [
                    { text: 'Cancelar', style: 'cancel' },
                    { text: 'Tirar Foto', onPress: () => openImagePicker('camera') },
                    { text: 'Escolher da Galeria', onPress: () => openImagePicker('gallery') },
                ]
            );
        }
    };

    return (
        <Container>
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

                <Button onPress={handleOnSubmit} disabled={isSubmittingImage}>
                    Enviar
                </Button>
                <Button onPress={test}>
                    Test
                </Button>
            </Form>
        </Container>
    );
}