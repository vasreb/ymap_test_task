import store from '../store'
import * as ActionNames from '../constants/ActionNames'

const addPoint = name => ({
	type: ActionNames.ADD_POINT,
	id: Date.now(),
	coords: store.getState().center,
	name,
})

export default addPoint
