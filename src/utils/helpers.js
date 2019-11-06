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
