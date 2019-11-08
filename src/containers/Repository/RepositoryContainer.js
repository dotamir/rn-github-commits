import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Toast} from 'native-base';
import {handleGoBack} from './../../utils/helpers';
import {fetch_repo} from './../../redux/modules/repositories';
import Repository from './Repository';

const RepositoryContainer = ({
	commits,
	repoName,
	dispatch,
	isFetching,
	loadMore,
}) => {
	const [page, setPage] = useState(2);

	const handleLoadMore = () => {
		try {
			dispatch(fetch_repo(repoName, page));

			setPage(page + 1);
		} catch (err) {
			Toast.show({
				buttonText: 'Okay',
				type: 'warning',
				text: 'Something went wrong! Please try again.',
			});
		}
	};

	return (
		<Repository
			repoName={repoName}
			commits={commits}
			handleGoBack={handleGoBack}
			handleLoadMore={handleLoadMore}
			isFetching={isFetching}
			loadMore={loadMore}
		/>
	);
};

RepositoryContainer.propTypes = {
	commits: PropTypes.array.isRequired,
	isFetching: PropTypes.bool.isRequired,
	loadMore: PropTypes.bool.isRequired,
};

const mapStateToProps = ({repositories}) => ({
	commits: repositories.repo,
	isFetching: repositories.isFetching,
	loadMore: repositories.loadMore,
});

export default connect(mapStateToProps)(RepositoryContainer);
