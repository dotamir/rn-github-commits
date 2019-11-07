import {Actions} from 'react-native-router-flux';

const AUTHENTICATING = 'AUTHENTICATING';
const SET_AUTH_STATUS = 'SET_AUTH_STATUS';

export const login = data => {
	return async dispatch => {
		dispatch({type: AUTHENTICATING, data: true});

		setTimeout(async () => {
			await dispatch({type: AUTHENTICATING, data: false});
			await dispatch({type: SET_AUTH_STATUS, data: true});

			Actions.search();
		}, 2000);
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
