import {fetch} from 'cross-fetch'

// todo: use import assertions once they're supported by Node.js & ESLint
// https://github.com/tc39/proposal-import-assertions
import {createRequire} from 'node:module'
const require = createRequire(import.meta.url)
const pkg = require('./package.json')

const userAgent = pkg.homepage || pkg.name

const endpoint = 'https://media.flixbus.com/services/pis/v1/'

const fetchCurrentPosition = async (fetchOpts = {}) => {
	const url = endpoint + 'position'

	const res = await fetch(url, {
		...fetchOpts,
		headers: {
			...(fetchOpts.headers || {}),
			'accept': 'application/json',
			'user-agent': userAgent,
		},
	})
	if (!res.ok) {
		const err = new Error(`${url}: ${res.status} ${res.statusText}`)
		err.url = url
		err.res = res
		throw err
	}
	const body = await res.json()
	return body
}

const positions = async function* (fetchOpts = {}) {
	while (true) {
		yield await fetchCurrentPosition()
	}
}

export {
	fetchCurrentPosition,
	positions,
}
