import request from './../utils/request';

export function getRepository(repo) {
	return request(`repos/${repo}/commits`, null, 'GET');
}
