/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StatusBar} from 'react-native';

import getRoutes from './src/config/routes';

const App = () => {
	return (
		<>
			<StatusBar barStyle="dark-content" />
			{getRoutes()}
		</>
	);
};

export default App;
