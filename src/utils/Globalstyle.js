import { Dimensions } from 'react-native';

const WINDOW_HEIGHT = Dimensions.get('window').height;
const WINDOW_WIDTH = Dimensions.get('window').width;

export const MOCKUP_DEVICE_WIDTH = 360;

export const MOCKUP_DEVICE_HEIGHT = 800;

export const W = pixcel => {return ((pixcel * WINDOW_WIDTH)/ MOCKUP_DEVICE_WIDTH)}

export const H = pixcel => {return((pixcel * WINDOW_HEIGHT)/ MOCKUP_DEVICE_HEIGHT)}