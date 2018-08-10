import React, {
	Component
} from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { connect } from '../../utils/dva';
import { scaleSize } from '../../utils/ScreenUtil';
import icon from '../../assets/image/home.png';

@connect(({ home }) => ({ $data:home }))
class Home extends Component {
	static navigationOptions = {
		tabBarIcon: ({
			tintColor
		}) => ( <Image source={icon} style={[styles.icon, { tintColor: tintColor }]} />)
	};
	constructor(props) {
		super(props);
		this.goNext = this.goNext.bind(this);
	}
	componentWillMount() {
	}
	goNext() {	
		this.props.dispatch({ type: 'home/test' })
	}
	click = () => {
		this.props.navigation.navigate('DrawerOpen');
	}
	render() {
		const { name, flg } = this.props.$data;
		return(
			<View style={styles.wrapper}>
				<Text onPress={this.goNext}>{name}</Text>
				<Text></Text>
		        {
		        		flg ? 
		        			<View>
				        		<Text onPress={()=>this.props.navigation.navigate('HomeNext', {name: '我是下一页'})}>下一页</Text>
				         	<Text></Text>
				        	 	<Text onPress={this.click}>侧滑栏</Text>
			        	 	</View>
		        	 	:
		        	 	null
		        }
		       
      		</View>
		);
	}
}

const styles = StyleSheet.create({
	icon: {
		width: scaleSize(40),
		height: scaleSize(40),
	},
	wrapper: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
export default Home;