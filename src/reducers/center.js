import defaultCoords from '../constants/defCoords'
import * as ActionNames from '../constants/ActionNames'

const center = (state = defaultCoords, action) => {
	switch (action.type) {
		case ActionNames.CHANGE_CURRENT_CENTER:
			return [...action.coords]
		default:
			return state
	}
}

export default center
