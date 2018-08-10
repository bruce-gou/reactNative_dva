//侧滑栏 
import { DrawerNavigator } from 'react-navigation';
import { WIDTH } from '../config/base';

//引入组件
import Navigator from './Navigator.js';
import Personal from '../pages/home/Personal.js';

const DrawerNav = DrawerNavigator(
	{
    		Home: { screen: Navigator }
	},
	{
	    drawerWidth: WIDTH*0.75, // 抽屉宽
	    drawerPosition: 'left', // 抽屉在左边还是右边
	    contentComponent: Personal,  // 自定义抽屉组件
	    contentOptions: {
	      initialRouteName: Navigator, // 默认页面组件
	      activeTintColor: 'white',  // 选中文字颜色
	      activeBackgroundColor: '#ff8500', // 选中背景颜色
	      inactiveTintColor: '#666',  // 未选中文字颜色
	      inactiveBackgroundColor: '#fff', // 未选中背景颜色
	      style: {  // 样式
	      }
	    }
	}
);
export default DrawerNav;