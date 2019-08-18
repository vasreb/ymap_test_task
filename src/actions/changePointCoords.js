import * as ActionNames from '../constants/ActionNames'

const changePointCoords = (id, coords) => ({
	type: ActionNames.CHANGE_POINT_COORDS,
	id,
	coords,
})

export default changePointCoords
