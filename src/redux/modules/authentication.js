import {Actions} from 'react-native-router-flux';
import {loginUser} from './../../api/user';
import {Toast} from 'native-base';

const AUTHENTICATING = 'AUTHENTICATING';
const SET_AUTH_STATUS = 'SET_AUTH_STATUS';

export const login = (username, password) => {
	return async dispatch => {
		dispatch({type: AUTHENTICATING, data: true});

		try {
			const user = await loginUser(username, password);

			dispatch({type: SET_AUTH_STATUS, data: true});
			Actions.search({user});
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

const initialState = {
	isAuthed: false,
	isAuthenticating: false,
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

		default:
			return state;
	}
};
