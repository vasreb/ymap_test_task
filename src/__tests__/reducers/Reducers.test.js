import center from '../../reducers/center'
import points from '../../reducers/points'
import * as ActionNames from '../../constants/ActionNames'

describe('reducers', () => {
	describe('center', () => {
		it('CHANGE_CURRENT_CENTER', () => {
			const action = {
				type: ActionNames.CHANGE_CURRENT_CENTER,
				coords: [5, 5],
			}
			expect(center([0, 0], action)).toEqual([5, 5])
		})
	})
	describe('point', () => {
		let state
		beforeEach(() => {
			state = [{ id: 94194, coords: [0, 0], name: 'jaw9jfka' }]
		})
		it('ADD_POINT', () => {
			const action = {
				type: ActionNames.ADD_POINT,
				coords: [5, 5],
				id: 512515,
				name: 'fafkoawkfwa',
			}
			expect(points(state, action)).toEqual([
				...state,
				{ coords: [5, 5], id: 512515, name: 'fafkoawkfwa' },
			])
		})
		it('DEL_POINT', () => {
			const action = {
				type: ActionNames.DEL_POINT,
				id: 94194,
			}
			expect(points(state, action)).toEqual([])
		})
		it('REORDER_POINTS', () => {
			const reorder = [{}, {}, {}]
			const action = {
				type: ActionNames.REORDER_POINTS,
				payload: reorder,
			}
			expect(points(state, action)).toEqual(reorder)
		})
		it('CHANGE_POINT_COORDS', () => {
			const action = {
				type: ActionNames.CHANGE_POINT_COORDS,
				id: 94194,
				coords: [14444, 92191],
			}
			expect(points(state, action)).toEqual([
				{ id: 94194, coords: [14444, 92191], name: 'jaw9jfka' },
			])
		})
	})
})
