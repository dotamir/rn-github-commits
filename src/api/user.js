import request from './../utils/request';
import {encode} from 'base-64';

export function loginUser(username, password) {
	const hash = encode(`${username}:${password}`);
	const options = {
		headers: {
			Authorization: `Basic ${hash}`,
		},
	};
	return request('user', null, 'GET', options);
}
