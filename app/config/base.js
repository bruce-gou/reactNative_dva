import {Platform , Dimensions} from 'react-native';
export const COLOR = '#00a0e4';//主题风格颜色

export const IS_IOS = Platform.OS === 'ios';

export const IS_ANDROID = Platform.OS === 'android';

export const WIDTH = Dimensions.get('window').width;

export const WIDTH_RATE = Dimensions.get('window').width / 750; //和 设计图之间的换算率

export const HEIGHT = Dimensions.get('window').height;

export const HEIGHT_RATE = Dimensions.get('window').height / 1334; //和 设计图之间的换算率











