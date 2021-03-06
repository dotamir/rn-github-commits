/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './src/redux';
import AppContainer from './src/containers/App/AppContainer';

const appReducer = combineReducers({...reducers});
function rootReducer(state, action) {
	return appReducer(state, action);
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk)),
);

const App = () => {
	return (
		<>
			<Provider store={store}>
				<AppContainer />
			</Provider>
		</>
	);
};

export default App;
