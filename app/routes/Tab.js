//主页底部导航栏
import React from 'react';
import { StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { IS_ANDROID, IS_IOS , COLOR, WIDTH} from '../config/base';
//引入组件
import Home from '../pages/home/Home'; 
import Mine from '../pages/mine/Mine'; 
//android 和 iOS 的底部导航样式
const TabSty = new Object();
if(IS_IOS){
	TabSty = {
		activeTintColor:COLOR, //活动选项卡的标签和图标颜色。
//  		activeBackgroundColor:'#000',//活动选项卡的背景颜色
    		inactiveTintColor:'#6d6d6d',//非活动选项卡的标签和图标颜色。
//  		inactiveBackgroundColor:'#fff',//非活动选项卡的背景颜色
		labelStyle:{//标签标签的样式对象
    			fontSize:12,
    			marginBottom:5
    		}
	}
}else if(IS_ANDROID){
	TabSty = {
		activeTintColor:COLOR, //活动选项卡的标签和图标颜色。
    		inactiveTintColor:'#6d6d6d',//非活动选项卡的标签和图标颜色。
    		showIcon:true,//是否显示标签图标，默认为false。
    		pressOpacity:0.1,//按下标签的不透明度
    		pressColor:'#ccc',//材质纹波的颜色（仅限Android> = 5.0）--按下的水印
    		tabStyle:{//选项卡的样式对象。
    			paddingTop:5
    		},
    		labelStyle:{//标签标签的样式对象
    			fontSize:12,
			margin:0
    		},
    		//选项卡指示符的样式对象（选项卡底部的行）。
    		indicatorStyle:{
    			height:0
    		}
	}
}
//标签栏的样式对象。
TabSty.style = {
	height:50,
	backgroundColor:'#fff'
}
const Tab = TabNavigator(
    {
//  		Message:{
//      		screen: Message,
//          navigationOptions: ({ navigation }) => ({
//          		title:'消息',
//              tabBarLabel: '消息',
//              tabBarIcon: ({ tintColor, focused }) => (  
//		              <Icon name="message-square" style={{color:tintColor,fontSize:16}}/>       
//		        )  
//          }) 
//     },
        Work:{
        		screen: Home,
			navigationOptions: {
				header: null,
			}
        },
        Personal:{
        		screen: Mine,
			navigationOptions: {
				header: null,
			}
        }
    },
    {
    		initialRouteName:'Work',
        tabBarPosition: 'bottom',
        swipeEnabled: true,//标签之间进行滑动  
        animationEnabled: true, //是否可滑动切换
        lazy: true,// 是否懒加载  
        tabBarOptions:TabSty
    }
);
export default Tab;