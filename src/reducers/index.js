import { combineReducers } from 'redux'
import center from './center'
import points from './points'

const rootReducer = combineReducers({ center, points })

export default rootReducer
