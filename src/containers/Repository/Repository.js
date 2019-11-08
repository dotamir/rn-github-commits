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
} from 'native-base';
import moment from 'moment';
import Commit from '../../components/Commit/Commit';
import {parseCommitMessage} from './../../utils/helpers';

const Repository = ({handleGoBack, commits, repoName}) => {
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
							author: {login, avatar_url},
							commit: {
								message,
								author: {date},
							},
						} = commit;
						const parseDate = moment(date).format('MM/D - HH:mm');
						const praseMessage = parseCommitMessage(message);

						return (
							<Commit
								key={sha}
								date={parseDate}
								message={praseMessage}
								username={login}
								avatar={avatar_url}
							/>
						);
					})}
				</List>
			</Content>
		</Container>
	);
};

Repository.propTypes = {
	handleGoBack: PropTypes.func.isRequired,
	commits: PropTypes.array.isRequired,
	repoName: PropTypes.string.isRequired,
};

export default Repository;
