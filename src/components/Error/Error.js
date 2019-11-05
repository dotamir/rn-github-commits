/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Animated, Dimensions} from 'react-native';
import {Actions} from 'react-native-router-flux';

const {height: deviceHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: 'transparent',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

const Error = props => {
	const [initialized, setInitialized] = useState(false);
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		if (!initialized) {
			setOffset(new Animated.Value(-deviceHeight));
			Animated.timing(offset, {
				duration: 150,
				toValue: 0,
			}).start();

			setInitialized(true);
		}
	}, [initialized, offset]);

	const closeModal = () => {
		Animated.timing(offset, {
			duration: 150,
			toValue: -deviceHeight,
		}).start(Actions.pop);
	};

	return (
		<Animated.View
			style={[
				styles.container,
				{backgroundColor: 'rgba(52,52,52,0.5)'},
				{transform: [{translateY: offset}]},
			]}>
			<View
				style={{
					width: 250,
					height: 250,
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: 'white',
				}}>
				<Text>{props.data}</Text>
				{/* <Button onPress={closeModal}>Close</Button> */}
			</View>
		</Animated.View>
	);
};

export default Error;
