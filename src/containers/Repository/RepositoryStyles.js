import {StyleSheet, Dimensions} from 'react-native';

const {width: deviceWidth} = Dimensions.get('window');

export default StyleSheet.create({
	loadMoreView: {
		marginTop: 10,
		width: deviceWidth - 80,
		display: 'flex',
		alignSelf: 'center',
	},
});
