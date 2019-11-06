const AUTHENTICATING = 'AUTHENTICATING';
const SET_AUTH_STATUS = 'SET_AUTH_STATUS';

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
