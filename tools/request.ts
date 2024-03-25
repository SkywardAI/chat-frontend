const URL_PREFIX = '/api'

export default (url: string, options?: Partial<RequestInit>) => {
	url = URL_PREFIX + url
	return fetch(url, options).catch((error) => {
		console.warn('error :>> ', error);
		return error
	})
}