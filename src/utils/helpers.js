import {Actions} from 'react-native-router-flux';

/**
 * Serialize javascript object for sending to api
 * @param {Object} data
 * @returns {String}
 */
export function serialize(data) {
	if (!data) {
		return false;
	}

	return Object.keys(data)
		.map(keyName => {
			if (data[keyName]) {
				return `${encodeURIComponent(keyName)}=${
					data[keyName] ? encodeURIComponent(data[keyName]) : ''
				}`;
			}

			return false;
		})
		.join('&');
}

/**
 * Back to last page using RNRF Actions
 */
export const handleGoBack = () => {
	return Actions.pop();
};

/**
 * Protect private views and shows a error modal
 */
export const protectedView = isAuthed => {
	if (!isAuthed) {
		return Actions.error({
			title: 'Private Scene',
			data: 'You must be logged in!',
		});
	}

	return true;
};
