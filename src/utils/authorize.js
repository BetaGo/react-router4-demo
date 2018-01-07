/* global document */
export const getCookies = () => {
	const pairs = document.cookie.split(';');
	const cookies = {};
	for (let i = 0; i < pairs.length; i += 1) {
		const pair = pairs[i].split('=');
		cookies[pair[0].toString().trim()] = unescape(pair[1]);
	}
	return cookies;
};

export const checkAuthorize = () => {
	const cookies = getCookies();
	if (cookies.user) {
		return true;
	}
	return false;
};

