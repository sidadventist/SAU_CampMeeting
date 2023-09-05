import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');
export const ORGDETAILS = {
    ytURL: '',
    fbURL: '',
    orgName: 'Southern Africa Union Conference',
    orgAddress: '2 Fairview Street Bloemfontein, Free state 9310, South Africa',
    orgCity: 'Bloemfontein',
    phoneNumber1: '+27 514478271',
    phoneNumber2: '',
    orgEmail: 'info@nsau.adventist.org',
    orgVision: '',
    orgMission: '',
    orgValues: '',
    apiUri: 'http://sau.adventist.org/wp-json/wp/v2',
    theme: 'We Are Nearing Home',
    hymnNumber: 'Hymn 185 ',
    themeSongEN: 'To Be There',
    themeSongXH: 'Ukuba Khona!',
    themeSongSN: 'Kuva Ikoyo',
    themeSongND: 'Ukuba Khona!',
}

export const COLORS = {
    primary: '#3E8391',
    secondary: '#f5f0e1',
    accent: '#ff6e40',

    success: '#00C851',
    error: '#ff4444',

    black: "#171717",
    white: "#FFFFFF",
    offWhite: "#EBEDEF",
    gray: '#708090',
    background: "#EEEEEE",

    primaryText: '#1e3d59',
    secondaryText: '#4257a1',
    tertiaryText: '#20B2AA'
}
export const FONT = {
    title: width * 0.1,
    large: width * 0.06,
    medium: width * 0.046,
    small: width * 0.04,
}
export const MARGIN = {
    small: width * 0.017,
    medium: width * 0.02,
    post: width * 0.05,
    large: width * 0.27,
    logo: width * 0.37,
    header: width * 0.1,
    vHeader: height * 0.08
}

export const SIZES = {
    base: 10,
    width,
    height,
}