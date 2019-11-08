import axios from 'axios';
import {serialize} from './helpers';
import _ from 'lodash';
import {apiUrl} from './../config/constant';
/**
 * Method for making ajax calls to the site's api
 * @param {String} endpoint - the endpoint url
 * @param {Object|string} [data=null] - key:value pairs of the data to be sent to server
 * @param {String} [method=get] - the type of ajax request to make
 * @returns {Promise}
 */
export default async function request(
	endpoint,
	data,
	method,
	extraOptions = {},
) {
	let url = `${apiUrl}/${endpoint}`;
	url = method === 'GET' && data !== null ? `${url}?${serialize(data)}` : url;

	let options = {
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		method,
		url,
	};

	options = _.merge(options, extraOptions);

	if (data && method !== 'GET') {
		options.data = data;
	}

	const response = await axios(options).then(res => res.data);

	return response;
}
