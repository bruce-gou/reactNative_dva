import { connect } from '../utils/dva';
import React, { Component } from 'react';
//组件
import DrawerNav from './DrawerNav.js';
class Router extends Component {
  render() {
    return <DrawerNav/>;
  }
}
export function routerReducer(state, action = {}) {
  return DrawerNav.router.getStateForAction(action, state)
}
export default Router;
