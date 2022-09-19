import {positions} from './index.js'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

for await (const pos of positions()) {
	console.log(pos)
	await sleep(1000)
}
