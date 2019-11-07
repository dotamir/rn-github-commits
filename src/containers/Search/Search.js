import React from 'react';
import {Container, Header, Item, Icon, Button, Text, Input} from 'native-base';

const Search = ({searchText, setSearchText, handleSubmitSearch}) => {
	return (
		<Container>
			<Header searchBar rounded>
				<Item>
					<Icon name="ios-search" />
					<Input
						defaultValue={searchText}
						onChangeText={text => setSearchText(text)}
						placeholder="Search"
					/>

					<Button onPress={() => handleSubmitSearch()} transparent>
						<Text>Search</Text>
					</Button>
				</Item>
			</Header>
		</Container>
	);
};

export default Search;
