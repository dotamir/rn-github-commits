import {Actions} from 'react-native-router-flux';
import {getRepository} from './../../api/repositories';
import {Toast} from 'native-base';

const FETCHING_REPOSITORY = 'FETCHING_REPOSITORY';
const SET_REPOSITORY = 'SET_REPOSITORY';
const PURGE_REPOSITORY = 'PURGE_REPOSITORY';
const END_OF_COMMITS = 'END_OF_COMMITS';

export const fetch_repo = (repo, page = 1) => {
	return async dispatch => {
		dispatch({type: FETCHING_REPOSITORY, data: true});

		try {
			const repository = await getRepository(repo, page);

			dispatch({type: SET_REPOSITORY, data: repository});

			if (page <= 1) {
				Actions.repository({repoName: repo});
			}

			if (repository.length < 30) {
				dispatch({type: END_OF_COMMITS});
			}
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
	loadMore: true,
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
				repo: [...state.repo, ...action.data],
			};
		case PURGE_REPOSITORY:
			return {
				...state,
				loadMore: true,
				repo: [],
			};
		case END_OF_COMMITS:
			return {
				...state,
				loadMore: false,
			};

		default:
			return state;
	}
};
