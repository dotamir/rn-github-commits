import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
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
			<Button title="Close" onPress={Actions.pop} />
		</View>
	</Modal>
);

export default ErrorModal;
