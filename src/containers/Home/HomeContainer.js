import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
	Container,
	Text,
	Form,
	Item,
	Input,
	Label,
	Button,
	Content,
	Header,
	Left,
	Body,
	Title,
	Right,
	CardItem,
	Card,
	Toast,
} from 'native-base';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

const HomeContainer = () => {
	const [username, onChangeUsername] = useState('');
	const [error, setError] = useState(false);

	const goToPassword = () => {
		if (!username) {
			setError(true);
			Toast.show({
				buttonText: 'Got it',
				text: 'Username cannot be empty.',
				type: 'danger',
			});

			return false;
		}

		Actions.password({username});
	};

	return (
		<Container>
			<Header>
				<Left />
				<Body>
					<Title>Welcome</Title>
				</Body>
				<Right />
			</Header>
			<Content>
				<Card>
					<CardItem>
						<Text>Welcome to Github repositories history</Text>
					</CardItem>
					<CardItem>
						<Text>Login to fetch history of repositories from Github</Text>
					</CardItem>
				</Card>
				<Form style={styles.form}>
					<Item error={error} style={styles.item} floatingLabel last>
						<Label>Username</Label>
						<Input
							autoCapitalize="none"
							autoCorrect={false}
							onChangeText={text => onChangeUsername(text)}
							value={username}
						/>
					</Item>
					<Button full onPress={goToPassword}>
						<Text>Next</Text>
					</Button>
				</Form>
			</Content>
		</Container>
	);
};

const styles = StyleSheet.create({
	item: {
		marginBottom: 20,
	},
	form: {
		paddingLeft: 10,
		paddingRight: 10,
	},
});

export default connect()(HomeContainer);
