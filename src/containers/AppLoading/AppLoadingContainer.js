import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {View, ActivityIndicator} from 'react-native';
import {prepareApp} from './../../redux/modules/app';
import styles from './AppLoadingStyles';

const AppLoadingContainer = ({appIsReady, children, dispatch}) => {
	useEffect(() => {
		if (!appIsReady) {
			// Simulate loading application with 2seconds delay
			setTimeout(() => {
				dispatch(prepareApp());
			}, 2000);
		}
	});

	if (appIsReady) {
		return children;
	}

	return (
		<View style={[styles.container, styles.horizontal]}>
			<ActivityIndicator size="large" color="#0000ff" />
		</View>
	);
};

AppLoadingContainer.propTypes = {
	appIsReady: PropTypes.bool.isRequired,
	children: PropTypes.element.isRequired,
};

const mapStateToProps = ({app}) => ({
	appIsReady: app.appIsReady,
});

export default connect(mapStateToProps)(AppLoadingContainer);
