import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {fetch_repo} from './../../redux/modules/repositories';
import Search from './Search';

const SearchContainer = ({user, dispatch, isFetching}) => {
	const [initialized, setInitialized] = useState(false);
	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		if (!initialized) {
			setSearchText('facebook/react-native');

			setInitialized(true);
		}
	}, [initialized]);

	const handleSubmitSearch = () => {
		dispatch(fetch_repo(searchText));
	};

	return (
		<Search
			setSearchText={setSearchText}
			searchText={searchText}
			handleSubmitSearch={handleSubmitSearch}
			user={user}
			isFetching={isFetching}
		/>
	);
};

const mapStateToProps = ({authentication, repositories}) => ({
	user: authentication.profileData,
	isFetching: repositories.isFetching,
});

export default connect(mapStateToProps)(SearchContainer);
