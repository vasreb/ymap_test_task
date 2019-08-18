import addPoint from '../actions/addPoint'
import delPoint from '../actions/delPoint'
import reorder from '../utilities/reorder'
import reorderPoints from '../actions/reorderPoints'
import { connect } from 'react-redux'
import PointBar from '../components/PointBar'

const mapStateToProps = state => {
	const { points } = state
	return {
		points,
	}
}

const mapDispatchToProps = dispatch => {
	const onDelPoint = id => {
		dispatch(delPoint(id))
	}
	const onAddPoint = name => {
		dispatch(addPoint(name ? name : 'Point'))
	}
	return {
		onDelPoint,
		onAddPoint,
		dispatch,
	}
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
	const { points } = stateProps
	const { dispatch } = dispatchProps
	const onReorder = (source, destination) => {
		dispatch(reorderPoints(reorder(points, source, destination)))
	}
	return {
		...stateProps,
		...dispatchProps,
		...ownProps,
		onReorder,
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
	mergeProps
)(PointBar)
