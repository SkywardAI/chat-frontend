const URL_PREFIX = '/api'

export default (url: string, options?: Partial<RequestInit>) => {
	url = URL_PREFIX + url
	return fetch(url, options)
}