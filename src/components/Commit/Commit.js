import React from 'react';
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

const styles = StyleSheet.create({
	avatar: {
		width: 40,
		height: 40,
	},
});

export default Commit;
