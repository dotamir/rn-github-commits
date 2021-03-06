import React from 'react';
import PropTypes from 'prop-types';
import {
	Container,
	Header,
	Item,
	Button,
	Text,
	Input,
	Content,
	Card,
	CardItem,
	Thumbnail,
	Left,
	Right,
	Body,
} from 'native-base';
import LogoutButton from './../../components/Logout/Logout';

const Search = ({
	searchText,
	setSearchText,
	handleSubmitSearch,
	user,
	isFetching,
}) => {
	const {
		followers,
		avatar_url,
		name,
		login,
		public_repos,
		total_private_repos,
		bio,
	} = user;

	return (
		<Container>
			<Header searchBar rounded>
				<Item>
					<Input
						autoCapitalize="none"
						autoCorrect={false}
						disabled={isFetching}
						defaultValue={searchText}
						onChangeText={text => setSearchText(text)}
						placeholder="Search"
					/>

					<Button
						disabled={isFetching}
						onPress={() => handleSubmitSearch()}
						transparent>
						<Text>Search</Text>
					</Button>
				</Item>
			</Header>
			<Content>
				<Card>
					<CardItem>
						<Left>
							<Thumbnail source={{uri: avatar_url}} />
							<Body>
								<Text>{name}</Text>
								<Text note>{login}</Text>
							</Body>
						</Left>
					</CardItem>
					<CardItem>
						<Body>
							<Text>{bio}</Text>
						</Body>
					</CardItem>
					<CardItem>
						<Left>
							<Button transparent>
								<Text>{followers} Followers</Text>
							</Button>
						</Left>
						<Body>
							<Button transparent>
								<Text>{public_repos} Public Repos</Text>
							</Button>
						</Body>
						<Right>
							<Button transparent>
								<Text>{total_private_repos} Private Repos</Text>
							</Button>
						</Right>
					</CardItem>
				</Card>
			</Content>
			<LogoutButton />
		</Container>
	);
};

Search.propTypes = {
	searchText: PropTypes.string.isRequired,
	setSearchText: PropTypes.func.isRequired,
	handleSubmitSearch: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired,
	isFetching: PropTypes.bool.isRequired,
};

export default Search;
