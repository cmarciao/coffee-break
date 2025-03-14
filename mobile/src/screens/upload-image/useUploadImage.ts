import { useState } from "react";
import { ActionSheetIOS, Alert, Platform } from "react-native";
import Toast from "react-native-toast-message";
import { readAsStringAsync, EncodingType } from 'expo-file-system'
import { expressApi } from "@/services/api";
import { sortClassifications } from "@/utils/sort-classifications";
import { openImagePicker } from "@/utils/image-picker";
import { CameraPermissionDenied } from "@/errors/camera-permission-denied";

export function useUploadImage() {
    const [plantId, setPlantId] = useState<string>('');
    const [imagePreviewUri, setImagePreviewUri] = useState<string | null>(null);
    const [isSubmittingImage, setIsSubmittingImage] = useState<boolean>(false);
    const [isOpenResultClassificationModal, setIsOpenResultClassificationModal] = useState(false);
    const [classifications, setClassifications] = useState<[string, number][]>([]);

    async function handleOnSubmit() {
        setIsSubmittingImage(true);
        const base64Image = await readAsStringAsync(imagePreviewUri!, {
            encoding: EncodingType.Base64,
        });
        try {
            const response = await expressApi.post("/classifier", { plantId, base64Image: `data:image/png;base64,${base64Image}` })
            setIsOpenResultClassificationModal(true);
            const sortedClassifications = Object.entries(sortClassifications(response.data));
            setClassifications(sortedClassifications);
            Toast.show({
                type: 'success',
                text1: 'Tudo certo!',
                text2: 'Imagem classificada com sucesso!',
            });
        } catch {
            Toast.show({
                type: 'error',
                text1: 'Error no envio',
                text2: 'Algum erro aconteceu, por favor, tente novamente.',
            });
        } finally {
            setIsSubmittingImage(false);
        };
    }

    async function handleOpenImagePicker(source: 'camera' | 'gallery') {
        try {
            const result = await openImagePicker(source);
            if (result.canceled) return;
            setImagePreviewUri(result.assets[0].uri);
        } catch (error) {
            if (error instanceof CameraPermissionDenied) {
                Toast.show({
                    type: 'error',
                    text1: 'Acesso negado...',
                    text2: 'Precisa conceder permissão para acessar a câmara.',
                });
                return;
            }
            Toast.show({
                type: 'error',
                text1: 'Algo aconteceu...',
                text2: 'Por favor, tente selecionar a imagem novamente.',
            });
        }
    };

    function showSelectImagesOptions() {
        if (Platform.OS === 'ios') {
            ActionSheetIOS.showActionSheetWithOptions(
                {
                    options: ['Cancelar', 'Tirar Foto', 'Escolher da Galeria'],
                    cancelButtonIndex: 0,
                },
                (buttonIndex) => {
                    if (buttonIndex === 1) handleOpenImagePicker('camera');
                    else if (buttonIndex === 2) handleOpenImagePicker('gallery');
                }
            );
        } else {
            Alert.alert(
                'Selecionar Imagem',
                'Escolha uma opção:',
                [
                    { text: 'Cancelar', style: 'cancel' },
                    { text: 'Tirar Foto', onPress: () => handleOpenImagePicker('camera') },
                    { text: 'Escolher da Galeria', onPress: () => handleOpenImagePicker('gallery') },
                ]
            );
        }
    };

    function handleCloseResultClassificationModal() {
        setPlantId('');
        setImagePreviewUri(null);
        setClassifications([]);
        setIsOpenResultClassificationModal(false);
    }

    const isSubmitButtonValid = !!plantId && !!imagePreviewUri;

    return {
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
    }
}