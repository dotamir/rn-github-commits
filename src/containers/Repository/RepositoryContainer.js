import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {handleGoBack} from './../../utils/helpers';
import Repository from './Repository';

const RepositoryContainer = ({commits, repoName}) => {
	return (
		<Repository
			repoName={repoName}
			commits={commits}
			handleGoBack={handleGoBack}
		/>
	);
};

RepositoryContainer.propTypes = {
	commits: PropTypes.array.isRequired,
};

const mapStateToProps = ({repositories}) => ({
	commits: repositories.repo,
});

export default connect(mapStateToProps)(RepositoryContainer);
