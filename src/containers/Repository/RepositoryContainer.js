import React from 'react';
import {
	Container,
	Header,
	Right,
	Left,
	Content,
	List,
	ListItem,
	Thumbnail,
	Text,
	Body,
	Title,
	Button,
} from 'native-base';
import {handleGoBack} from './../../utils/helpers';

const RepositoryContainer = () => {
	return (
		<Container>
			<Header>
				<Left />
				<Body>
					<Title>Parizad</Title>
				</Body>
				<Right>
					<Button onPress={() => handleGoBack()} hasText transparent>
						<Text>Back</Text>
					</Button>
				</Right>
			</Header>
			<Content>
				<List>
					<ListItem avatar>
						<Left>
							<Thumbnail
								source={{
									uri:
										'https://avatars2.githubusercontent.com/u/16477296?s=460&v=4',
								}}
							/>
						</Left>
						<Body>
							<Text>Kumar Pratik</Text>
							<Text note>
								Doing what you like will always keep you happy . .
							</Text>
						</Body>
						<Right>
							<Text note>3:43 pm</Text>
						</Right>
					</ListItem>
				</List>
			</Content>
		</Container>
	);
};

export default RepositoryContainer;
