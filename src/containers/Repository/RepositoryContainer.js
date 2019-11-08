import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {handleGoBack} from './../../utils/helpers';
import Repository from './Repository';

const RepositoryContainer = ({commits}) => {
	return <Repository commits={commits} handleGoBack={handleGoBack} />;
};

RepositoryContainer.propTypes = {
	commits: PropTypes.array.isRequired,
};

const mapStateToProps = ({repositories}) => ({
	commits: repositories.repo,
});

export default connect(mapStateToProps)(RepositoryContainer);
