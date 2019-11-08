import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
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
import {connect} from 'react-redux';
import {handleGoBack} from './../../utils/helpers';
import {login} from './../../redux/modules/authentication';

const PasswordContainer = ({username, dispatch, isAuthenticating}) => {
	const [password, onChangePassword] = useState('');

	const signIn = async () => {
		if (!password || password.length < 8) {
			Toast.show({
				buttonText: 'Got it',
				text: 'Password cannot be empty and it must be more that 8chars.',
				type: 'warning',
			});

			return false;
		}
		await dispatch(login(username, password));
	};

	return (
		<Container>
			<Header>
				<Left />
				<Body>
					<Title>Welcome</Title>
				</Body>
				<Right>
					<Button onPress={() => handleGoBack()} hasText transparent>
						<Text>Back</Text>
					</Button>
				</Right>
			</Header>
			<Content>
				<Card>
					<CardItem>
						<Text>Okay good, now we know your username is: {username}</Text>
					</CardItem>
					<CardItem>
						<Text>Note: Please note it, which your 2FA Github settings must be disabled!</Text>
					</CardItem>
				</Card>
				<Form style={styles.form}>
					<Item style={styles.item} floatingLabel last>
						<Label>Password</Label>
						<Input
							autoCapitalize="none"
							autoCorrect={false}
							onChangeText={text => onChangePassword(text)}
							value={password}
						/>
					</Item>
					<Button onPress={signIn} full>
						{isAuthenticating ? (
							<ActivityIndicator size="small" color="#00ff00" />
						) : (
							<Text>Next</Text>
						)}
					</Button>
				</Form>
			</Content>
		</Container>
	);
};

PasswordContainer.propTypes = {
	username: PropTypes.string.isRequired,
	isAuthenticating: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
	item: {
		marginBottom: 30,
	},
	form: {
		paddingLeft: 10,
		paddingRight: 10,
	},
});

const mapStateToProps = ({authentication}) => ({
	isAuthenticating: authentication.isAuthenticating,
});

export default connect(mapStateToProps)(PasswordContainer);
