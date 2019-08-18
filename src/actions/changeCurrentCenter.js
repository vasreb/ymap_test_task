import * as ActionNames from '../constants/ActionNames'

const changeCurrentCenter = coords => ({
	type: ActionNames.CHANGE_CURRENT_CENTER,
	coords,
})

export default changeCurrentCenter
