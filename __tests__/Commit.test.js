/**
 * @format
 */

import 'react-native';
import React from 'react';
import Commit from './../src/components/Commit/Commit';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
	const commit = {
		avatar: 'https://avatars2.githubusercontent.com/u/16477296?s=460&v=4',
		message: 'Commit message',
		date: '20/11 - 03:43',
		username: 'dotamir',
	};
	const component = renderer.create(<Commit {...commit} />).toJSON();
	expect(component).toMatchSnapshot();
});
