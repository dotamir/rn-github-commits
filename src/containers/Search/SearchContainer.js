import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import Search from './Search';

const SearchContainer = () => {
	const [initialized, setInitialized] = useState(false);
	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		if (!initialized) {
			setSearchText('facebook/react-native');

			setInitialized(true);
		}
	}, [initialized]);

	const handleSubmitSearch = () => {
		Actions.repository();
	};

	return (
		<Search
			setSearchText={setSearchText}
			searchText={searchText}
			handleSubmitSearch={handleSubmitSearch}
		/>
	);
};

export default connect()(SearchContainer);
