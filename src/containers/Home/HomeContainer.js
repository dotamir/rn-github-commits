import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Actions} from 'react-native-router-flux';
// import {MessageBarManager} from 'react-native-message-bar';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'transparent',
	},
});

const HomeContainer = props => {
	return (
		<View {...props} style={styles.container}>
			<Text>Welcome</Text>
			<Button
				title="Display Error Modal"
				onPress={() =>
					Actions.error({
						title: 'Error title',
						data: 'Error explation',
					})
				}
			/>
		</View>
	);
};

export default HomeContainer;
