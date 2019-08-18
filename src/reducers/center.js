import defaultCoords from '../constants/defCoords'
const center = (state = defaultCoords, action) => {
	switch (action.type) {
		case 'CHANGE_CURRENT_CENTER':
			return [...action.coords]
		default:
			return state
	}
}

export default center
