import changeCurrentCenter from '../../actions/changeCurrentCenter'
import changePointCoords from '../../actions/changePointCoords'
import delPoint from '../../actions/delPoint'
import reorderPoints from '../../actions/reorderPoints'
import * as ActionNames from '../../constants/ActionNames'

describe('changeCurrentCenter', () => {
	it('changeCurrentCenter', () => {
		expect(changeCurrentCenter([0, 0])).toEqual({
			type: ActionNames.CHANGE_CURRENT_CENTER,
			coords: [0, 0],
		})
	})
	it('changePointCoords', () => {
		expect(changePointCoords(4444, [0, 0])).toEqual({
			type: ActionNames.CHANGE_POINT_COORDS,
			id: 4444,
			coords: [0, 0],
		})
	})
	it('delPoint', () => {
		expect(delPoint(4444)).toEqual({
			type: ActionNames.DEL_POINT,
			id: 4444,
		})
	})
	it('reorderPoints', () => {
		expect(reorderPoints(['test1', 'test2', 'test3'])).toEqual({
			type: ActionNames.REORDER_POINTS,
			payload: ['test1', 'test2', 'test3'],
		})
	})
})
