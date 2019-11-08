import request from './../utils/request';

export function getRepository(repo, page) {
	const data = {
		page,
	};
	return request(`repos/${repo}/commits`, data, 'GET');
}
