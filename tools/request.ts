import { ElNotification } from 'element-plus'
const URL_PREFIX = '/api'

interface Options extends Partial<RequestInit> {
	body: any
}


export default (url: string, options?: Options) => {
	url = URL_PREFIX + url
	const defaultOption = {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		},
	}
	const body = typeof options?.body === 'object' ? JSON.stringify(options.body) : options?.body
	const mergeOptions = {
		...defaultOption,
		...options,
		body
	}
	return fetch(url, mergeOptions).then((res) => {
		if (res.status >= 100 && res.status < 400) {
			return res.json()
		} else {
			ElNotification({
				message: h('div', { style: 'color: red' }, res.statusText || 'Server Error'),
			})
			return
		}
	}).catch(error => {

		console.log('error :>> ', error);
		return error
	})
}