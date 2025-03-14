import { CameraPermissionDenied } from '@/errors/camera-permission-denied';
import { requestCameraPermissionsAsync, launchCameraAsync, launchImageLibraryAsync, ImagePickerResult } from 'expo-image-picker';

export async function openImagePicker(source: 'camera' | 'gallery'): Promise<ImagePickerResult> {
    if (source === 'camera') return openCamera();
    return openGallery();

};

async function openCamera(): Promise<ImagePickerResult> {
    const { status } = await requestCameraPermissionsAsync();
    if (status !== 'granted') {
        throw new CameraPermissionDenied();
    }
    const result = await launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
    });
    return result;
}

async function openGallery(): Promise<ImagePickerResult> {
    const result = await launchImageLibraryAsync({
        mediaTypes: 'images',
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
    });
    return result;
}