import store from '../store'

const addPoint = name => ({
	type: 'ADD_POINT',
	id: Date.now(),
	coords: store.getState().center,
	name,
})

export default addPoint
