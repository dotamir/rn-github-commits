import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Text} from 'native-base';
import {connect} from 'react-redux';
import {logout} from '../../redux/modules/authentication';

const Logout = ({dispatch}) => {
	const handleLogout = () => {
		dispatch(logout());
	};

	return (
		<Button style={styles.button} rounded onPress={() => handleLogout()}>
			<Text>Log out</Text>
		</Button>
	);
};

const styles = StyleSheet.create({
	button: {
		position: 'absolute',
		bottom: 50,
		right: 10,
	},
});

export default connect()(Logout);
