import * as ActionNames from '../constants/ActionNames'

const reorderPoints = newOrder => ({
	type: ActionNames.REORDER_POINTS,
	payload: newOrder,
})

export default reorderPoints
