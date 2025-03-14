export class CameraPermissionDenied extends Error {
    constructor() {
        super();
        this.name = 'CameraPermissionDenied';
    }
}