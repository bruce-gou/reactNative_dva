
export default {
	namespace: 'home',
	state: {
		name: '点我',
		flg: false
	},
	effects: {
		*test({ payload }, { call, put, select }) {
			let flg = yield select(state => state.home.flg);
			yield put({type:'backData',payload:{flg:!flg}})
		}
	},
	reducers:{
		backData(state, { payload: payload }) {
			return { ...state, ...payload };
		}
	}
}