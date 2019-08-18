import * as ActionNames from '../constants/ActionNames'

const points = (state = [], action) => {
	switch (action.type) {
		case ActionNames.ADD_POINT:
			const { id, coords, name } = action
			return [
				...state,
				{
					id,
					coords,
					name,
				},
			]
		case ActionNames.DEL_POINT:
			return state.filter(point => point.id !== action.id)
		case ActionNames.REORDER_POINTS:
			return [...action.payload]
		case ActionNames.CHANGE_POINT_COORDS:
			const index = state.findIndex(point => point.id === action.id)
			const newState = [...state]
			newState[index].coords = action.coords
			return newState
		default:
			return state
	}
}

export default points
