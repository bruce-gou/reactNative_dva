//页面路由导航
import React from 'react';
import { StyleSheet ,View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator.js';
import { IS_ANDROID , COLOR} from '../config/base';
//引入组件
import Tab from './Tab.js';
//引入路由
import Pages from './routerConfig';

//导航栏文字样式
const headerTitleStyle = { flex:1, textAlign:'center', fontWeight:'normal', fontSize:15, color:'#fff'};
const Navigator = StackNavigator(
    {
    		App: { screen: Tab },
    		...Pages
    },
    {
    		//设置启动页，android 需要模拟，ios 可以自带设置
//  		initialRouteName:IS_ANDROID?'Launch':'Tab',
    		initialRouteName:'App',
        navigationOptions:({ navigation }) => ({
        		//设置导航条的样式。背景色，宽高等 
        		headerStyle:{
        			backgroundColor:COLOR,
        			height:40,
        			elevation:0,
        			shadowOpacity:0
        		},
        		//设置导航栏文字样式
        		headerTitleStyle: headerTitleStyle,
        		headerBackTitle:null,
        		//是否可以使用手势来关闭此屏幕
        		gesturesEnabled:false
        }),
        //统一 android和ios 的页面切换效果
        transitionConfig:()=>({
	        screenInterpolator:CardStackStyleInterpolator.forHorizontal
	    })
    }
);
//样式
const styles = StyleSheet.create({
	leftViewIcon:{
		width:65,
		flexDirection:'row',
		justifyContent:'flex-start'
	},
	icon:{
		fontSize:30,
		color:'#fff',
		backgroundColor:'transparent'
	}
});
export default Navigator;