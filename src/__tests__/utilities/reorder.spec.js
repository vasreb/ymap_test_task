import reorder from '../../utilities/reorder'

describe('reorder test', () => {
	const arr = [
		{ id: 1566054773276, coords: [0, 0], name: 'Point' },
		{ id: 1566054774395, coords: [0, 0], name: 'p1' },
		{ id: 1566054775291, coords: [0, 0], name: 'p2' },
		{ id: 1566054776131, coords: [0, 0], name: 'p3' },
		{ id: 1566054776880, coords: [0, 0], name: 'p4' },
	]
	test('1 -> 3', () => {
		const resArr = [
			{ id: 1566054773276, coords: [0, 0], name: 'Point' },
			{ id: 1566054775291, coords: [0, 0], name: 'p2' },
			{ id: 1566054776131, coords: [0, 0], name: 'p3' },
			{ id: 1566054774395, coords: [0, 0], name: 'p1' },
			{ id: 1566054776880, coords: [0, 0], name: 'p4' },
		]
		expect(reorder(arr, 1, 3)).toEqual(resArr)
	})
	test('0 -> 4', () => {
		const resArr = [
			{ id: 1566054774395, coords: [0, 0], name: 'p1' },
			{ id: 1566054775291, coords: [0, 0], name: 'p2' },
			{ id: 1566054776131, coords: [0, 0], name: 'p3' },
			{ id: 1566054776880, coords: [0, 0], name: 'p4' },
			{ id: 1566054773276, coords: [0, 0], name: 'Point' },
		]
		expect(reorder(arr, 0, 4)).toEqual(resArr)
	})
})
