import React from 'react';
import PropTypes from 'prop-types';
import {
	Container,
	Header,
	Left,
	Right,
	Body,
	Content,
	Text,
	Button,
	Title,
	List,
	View,
} from 'native-base';
import moment from 'moment';
import _ from 'lodash';
import Commit from '../../components/Commit/Commit';
import {parseCommitMessage} from './../../utils/helpers';
import styles from './RepositoryStyles';
import LogoutButton from '../../components/Logout/Logout';

const Repository = ({
	handleGoBack,
	commits,
	repoName,
	isFetching,
	handleLoadMore,
	loadMore,
}) => {
	return (
		<Container>
			<Header>
				<Left />
				<Body>
					<Title>{repoName}</Title>
				</Body>
				<Right>
					<Button onPress={() => handleGoBack()} hasText transparent>
						<Text>Back</Text>
					</Button>
				</Right>
			</Header>
			<Content>
				<List>
					{commits.map(commit => {
						const {
							sha,
							commit: {
								message,
								author: {date},
							},
						} = commit;
						const parseDate = moment(date).format('MM/D - HH:mm');
						const praseMessage = parseCommitMessage(message);

						// I saw in the Github api sometimes "author" is null,
						// then I'm using lodash "get" to get them whenever it's not null.
						const username = _.get(commit.author, 'login');
						const avatar = _.get(commit.author, 'avatar_url');

						return (
							<Commit
								key={sha}
								date={parseDate}
								message={praseMessage}
								username={username}
								avatar={avatar}
							/>
						);
					})}
				</List>
				<View style={styles.loadMoreView}>
					{loadMore ? (
						<Button
							block
							onPress={() => handleLoadMore()}
							disabled={isFetching}>
							<Text>Load more</Text>
						</Button>
					) : (
						<Text>That's all the commits.</Text>
					)}
				</View>
			</Content>
			<LogoutButton />
		</Container>
	);
};

Repository.propTypes = {
	handleGoBack: PropTypes.func.isRequired,
	commits: PropTypes.array.isRequired,
	repoName: PropTypes.string.isRequired,
	handleLoadMore: PropTypes.func.isRequired,
	isFetching: PropTypes.bool.isRequired,
	loadMore: PropTypes.bool.isRequired,
};

export default Repository;
