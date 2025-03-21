import { SvgXml } from 'react-native-svg';

export function UploadIcon() {
    const markup = `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="55" viewBox="0 0 60 55" fill="none">
        <path d="M8.39361 35.1237C6.3874 33.074 4.87395 30.5945 3.96791 27.8732C3.06187 25.1519 2.78699 22.2601 3.1641 19.4169C3.54121 16.5736 4.56041 13.8534 6.14452 11.4624C7.72862 9.07138 9.83607 7.07219 12.3073 5.61629C14.7784 4.16038 17.5485 3.28593 20.4077 3.05917C23.2669 2.83241 26.1402 3.25929 28.81 4.30747C31.4798 5.35566 33.876 6.99765 35.8172 9.10909C37.7584 11.2205 39.1936 13.746 40.0142 16.4943H44.8477C47.4549 16.494 49.993 17.3323 52.0872 18.8853C54.1814 20.4383 55.7206 22.6236 56.4773 25.1186C57.2341 27.6135 57.1684 30.2857 56.2898 32.7404C55.4113 35.1951 53.7665 37.3021 51.5985 38.7502" stroke="#F0F0F5" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M29.996 27.2956V51.5983" stroke="#F0F0F5" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M19.1948 40.7971L29.996 51.5983L40.7973 40.7971" stroke="#F0F0F5" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`;

    return <SvgXml xml={markup} />
}