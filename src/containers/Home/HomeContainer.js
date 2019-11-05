import React from 'react';
import {View, Text} from 'react-native';
import {Container, Header, Left, Title, Button, Body, Right} from 'native-base';

const HomeContainer = props => {
	return (
		<View {...props}>
			<Container>
				<Header>
					<Left />
					<Body>
						<Title>Home</Title>
					</Body>
					<Right />
				</Header>
			</Container>
		</View>
	);
};

export default HomeContainer;
