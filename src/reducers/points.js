const points = (state = [], action) => {
	switch (action.type) {
		case 'ADD_POINT':
			const { id, coords, name } = action
			return [
				...state,
				{
					id,
					coords,
					name,
				},
			]
		case 'DEL_POINT':
			return state.filter(point => point.id !== action.id)
		case 'REORDER_POINTS':
			return [...action.payload]
		case 'CHANGE_POINT_COORDS':
			const index = state.findIndex(point => point.id === action.id)
			const newState = [...state]
			newState[index].coords = action.coords
			return newState
		default:
			return state
	}
}

export default points
