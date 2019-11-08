import React from 'react';
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

export default Repository;
