import {Actions} from 'react-native-router-flux';
import {getRepository} from './../../api/repositories';
import {Toast} from 'native-base';

const FETCHING_REPOSITORY = 'FETCHING_REPOSITORY';
const SET_REPOSITORY = 'SET_REPOSITORY';

export const fetch_repo = repo => {
	return async dispatch => {
		dispatch({type: FETCHING_REPOSITORY, data: true});

		try {
			const repository = await getRepository(repo);

			dispatch({type: SET_REPOSITORY, data: repository});
			Actions.repository({repoName: repo});
		} catch (err) {
			const {data} = err.response;
			Toast.show({
				text: data.message,
				buttonText: 'Okay',
				type: 'warning',
			});
		} finally {
			dispatch({type: FETCHING_REPOSITORY, data: false});
		}
	};
};

const initialState = {
	isFetching: false,
	repo: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCHING_REPOSITORY:
			return {
				...state,
				isFetching: action.data,
			};
		case SET_REPOSITORY:
			return {
				...state,
				repo: action.data,
			};

		default:
			return state;
	}
};
