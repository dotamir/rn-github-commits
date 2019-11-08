import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';
import {ListItem, Left, Right, Body, Text, Thumbnail} from 'native-base';

const Commit = ({avatar, message, date, username}) => {
	return (
		<ListItem style={styles.listItem} avatar>
			<Left>
				<Thumbnail
					style={styles.avatar}
					source={{
						height: 50,
						width: 50,
						uri: avatar,
					}}
				/>
			</Left>
			<Body>
				<Text>{username}</Text>
				<Text note>{message}</Text>
			</Body>
			<Right>
				<Text note>{date}</Text>
			</Right>
		</ListItem>
	);
};

Commit.propTypes = {
	avatar: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
	avatar: {
		width: 40,
		height: 40,
	},
});

export default Commit;
