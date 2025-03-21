import { SvgXml } from 'react-native-svg';

export function LogoIcon() {
    const markup = `<svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
        <path d="M32.9474 15.2632H35.1579C37.503 15.2632 39.752 16.1947 41.4102 17.8529C43.0684 19.5112 44 21.7602 44 24.1053C44 26.4503 43.0684 28.6994 41.4102 30.3576C39.752 32.0158 37.503 32.9474 35.1579 32.9474H32.9474" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 15.2632H32.9474V35.1579C32.9474 37.503 32.0158 39.752 30.3576 41.4102C28.6994 43.0684 26.4503 44 24.1053 44H10.8421C8.49703 44 6.24801 43.0684 4.58979 41.4102C2.93158 39.752 2 37.503 2 35.1579V15.2632Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.63158 2V6.42105" stroke="#D6665F" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17.4737 2V6.42105" stroke="#D6665F" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M26.3158 2V6.42105" stroke="#D6665F" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`;

    return <SvgXml xml={markup} />
}