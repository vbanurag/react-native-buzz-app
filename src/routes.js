import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './screens/login';
import Signup from './screens/signup';
import Dashboard from './screens/dashboard'

export default class Routes extends Component {
	render() {
		return(
			<Router>
			    <Stack key="root" hideNavBar={true}>
						<Scene key='landing' component={Dashboard} title='dashboard' initial={true}/>
			      <Scene key="login" component={Login} title="Login" />
			      <Scene key="signup" component={Signup} title="Register"/>
			    </Stack>
			 </Router>
			)
	}
}