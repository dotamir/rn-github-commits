import React from 'react';
import {connect} from 'react-redux';
import {handleGoBack} from './../../utils/helpers';
import Repository from './Repository';

const RepositoryContainer = ({commits}) => {
	return <Repository commits={commits} handleGoBack={handleGoBack} />;
};

const mapStateToProps = ({repositories}) => ({
	commits: repositories.repo,
});

export default connect(mapStateToProps)(RepositoryContainer);
