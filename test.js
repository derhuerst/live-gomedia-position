import {test} from 'tape'
import {
	fetchCurrentPosition,
	positions,
} from './index.js'

const validatePosEvent = (t, pos, name = 'pos') => {
	t.deepEqual(Object.keys(pos), [
		'latitude',
		'longitude',
		'speed',
	])
	t.equal(typeof pos.latitude, 'number', name + '.latitude must be a number')
	t.ok(!Number.isNaN(pos.latitude), name + '.latitude must not be NaN')
	t.equal(typeof pos.longitude, 'number', name + '.longitude must be a number')
	t.ok(!Number.isNaN(pos.longitude), name + '.longitude must not be NaN')
	t.equal(typeof pos.speed, 'number', name + '.speed must be a number')
	t.ok(!Number.isNaN(pos.speed), name + '.speed must not be NaN')
}

test('fetchCurrentPosition works', async (t) => {
	const res = await fetchCurrentPosition()
	validatePosEvent(t, res, 'res')
})

test('positions works', async (t) => {
	const asyncIt = positions()[Symbol.asyncIterator]()

	const {done: done1, value: pos1} = await asyncIt.next()
	t.equal(done1, false, 'it 0: .done')
	validatePosEvent(t, pos1, 'pos1')

	await new Promise(resolve => setTimeout(resolve, 1000))

	const {done: done2, value: pos2} = await asyncIt.next()
	t.equal(done2, false, 'it 0: .done')
	validatePosEvent(t, pos2, 'pos2')
})
