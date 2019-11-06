import React, {useState} from 'react';
import {View, StyleSheet, ImageBackground, Dimensions} from 'react-native';
import {Container, Text, Form, Item, Input, Label, Button} from 'native-base';
import {Row, Grid} from 'react-native-easy-grid';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

const {width: deviceWidth, height: deviceHeight} = Dimensions.get('window');

const HomeContainer = ({dispatch}) => {
	const [username, onChangeUsername] = useState('');
	const goToPassword = () => {
		Actions.password({username});
	};
	return (
		<Container>
			<Grid style={styles.grid}>
				<Row style={styles.firstRow}>
					<ImageBackground
						style={styles.thumbnail}
						source={{
							height: 100,
							width: 100,
							uri:
								'https://cdn.dribbble.com/users/464226/screenshots/6381358/kubernetes_githubactions-_blog-v3.png',
						}}>
						<View elevation={17} style={styles.content}>
							<Form style={styles.form}>
								<Item style={styles.item} floatingLabel>
									<Label>Username</Label>
									<Input
										onChangeText={text => onChangeUsername(text)}
										value={username}
									/>
								</Item>
								<Button onPress={goToPassword} full>
									<Text>Next</Text>
								</Button>
							</Form>
						</View>
					</ImageBackground>
				</Row>
				<Row />
			</Grid>
		</Container>
	);
};

const styles = StyleSheet.create({
	grid: {
		flexDirection: 'column',
	},
	content: {
		alignSelf: 'center',
		width: deviceWidth - 50,
		height: deviceHeight / 3.5,
		top: '70%',
		backgroundColor: '#fff',
		borderRadius: 5,
		shadowColor: '#ccc',
		shadowOffset: {
			width: 0,
			height: 8,
		},
		shadowOpacity: 0.46,
		shadowRadius: 11.14,
		elevation: 17,
		borderColor: '#000',
		borderWidth: 0,
	},
	firstRow: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	thumbnail: {
		width: '100%',
		height: '100%',
	},
	item: {
		marginLeft: 0,
		marginRight: 0,
		marginBottom: 30,
	},
	button: {
		marginTop: 40,
	},
	form: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		paddingLeft: 10,
		paddingRight: 10,
	},
});

export default connect()(HomeContainer);
