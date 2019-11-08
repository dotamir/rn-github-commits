import {Actions} from 'react-native-router-flux';
import {loginUser} from './../../api/user';
import {Toast} from 'native-base';

const AUTHENTICATING = 'AUTHENTICATING';
const SET_AUTH_STATUS = 'SET_AUTH_STATUS';
const SET_PROFILE_DATA = 'SET_PROFILE_DATA';

export const login = (username, password) => {
	return async dispatch => {
		dispatch({type: AUTHENTICATING, data: true});

		try {
			const user = await loginUser(username, password);

			dispatch({type: SET_PROFILE_DATA, data: user});
			dispatch({type: SET_AUTH_STATUS, data: true});
			Actions.replace('search');
		} catch (err) {
			const {data} = err.response;
			Toast.show({
				text: data.message,
				buttonText: 'Okay',
				type: 'warning',
			});
		} finally {
			dispatch({type: AUTHENTICATING, data: false});
		}
	};
};

export const logout = () => {
	return async dispatch => {
		Actions.replace('home');
		dispatch({type: SET_AUTH_STATUS, data: false});
	};
};

const initialState = {
	isAuthed: false,
	isAuthenticating: false,
	profileData: {},
};

export default (state = initialState, action) => {
	switch (action.type) {
		case AUTHENTICATING:
			return {
				...state,
				isAuthenticating: action.data,
			};
		case SET_AUTH_STATUS:
			return {
				...state,
				isAuthed: action.data,
			};
		case SET_PROFILE_DATA:
			return {
				...state,
				profileData: action.data,
			};

		default:
			return state;
	}
};
