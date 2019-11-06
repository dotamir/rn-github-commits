import axios from 'axios';
import {serialize} from './helpers';

/**
 * Method for making ajax calls to the site's api
 * @param {String} endpoint - the endpoint url
 * @param {Object|string} [data=null] - key:value pairs of the data to be sent to server
 * @param {String} [method=get] - the type of ajax request to make
 * @returns {Promise}
 */
export default async function request(endpoint, data, method) {
	let url = `/${endpoint}`;
	url = method === 'GET' && data !== null ? `${url}?${serialize(data)}` : url;

	const options = {
		method,
		mode: 'cors',
		url,
	};

	if (data) {
		options.data = data;
	}

	const response = await axios(options).then(res => res.data);

	return response;
}
