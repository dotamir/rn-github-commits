import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'native-base';
import {Actions} from 'react-native-router-flux';
import Modal from './BaseModal';

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: 20,
	},
});

const ErrorModal = props => (
	<Modal hideClose>
		<View flex={1} style={styles.container}>
			<Text>{props.title}</Text>
			<Text>{props.data}</Text>
			<Button block onPress={() => Actions.popTo('home')}>
				<Text>Close</Text>
			</Button>
		</View>
	</Modal>
);

ErrorModal.propTypes = {
	title: PropTypes.string.isRequired,
	data: PropTypes.string.isRequired,
};

export default ErrorModal;
