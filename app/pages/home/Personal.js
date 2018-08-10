import React, {Component} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

import { HEIGHT_RATE, WIDTH_RATE } from '../../config/base.js';
let img = require('../../assets/image/head.jpg');
class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data:[]
		};
	}
	componentWillMount(){
	}
	render() {
		return(
			<View style={styles.index}>
				<Image/>
				<View style={styles.head}>
					<View style={styles.head_left}>
						<Image source={img} style={styles.headImg}/>
					</View>
				</View>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	index:{
		flex:1
	},
	top:{
		//height:240 * HEIGHT_RATE,
		height:350 * HEIGHT_RATE,
		paddingLeft:20,
		justifyContent:'center'
	},
	bottom:{
		flex:5,
		paddingLeft:20,
		paddingRight:20,
		paddingTop:10,
		paddingBottom:10
	},
	head:{
		flexDirection:'row',
		alignItems:'center',
		height:170 * HEIGHT_RATE,
	},
	head_left:{
		width:90,
	},
	head_right:{
		flex:1
	},
	headImg:{
		width:160 * WIDTH_RATE,
		height:160 * HEIGHT_RATE,
		borderWidth:5 * HEIGHT_RATE,
		borderColor:'#88caec',
		borderRadius:40
	},
	name:{
		fontSize:20,
		color:'#fff',
		backgroundColor:'transparent'
	},
	role:{
		color:'#fff',
		fontSize:15,
		marginTop:5,
		backgroundColor:'transparent'
	},
	bList:{
		height:90 * HEIGHT_RATE,
		borderBottomWidth:1,
		borderBottomColor:'#c8c7cc'
	},
	bList_btn:{
		flex:1,
		justifyContent:'center',
	},
	bTxt:{
		fontSize:12,
		color:'#333',
		marginLeft:10
	},
	version:{
		fontSize:12,
		color:'#333',
		flex:1,
		textAlign:'right'
	},
	iconList:{
		flexDirection:'row',
		alignItems:'center'
	},
	icon:{
		color:'#8f8f94',
		fontSize:15
	}
});
export default Index;