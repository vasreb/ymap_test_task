import React from 'react'
import { connect } from 'react-redux'
import { Placemark } from 'react-yandex-maps'
import changeCurrentCenter from '../actions/changeCurrentCenter'
import changePointCoords from '../actions/changePointCoords'
import Map from '../components/Map'

const mapStateToProps = state => {
	const { points } = state
	const polylineCoords = points.map(point => point.coords)

	return {
		points,
		polylineCoords,
	}
}

const mapDispatchToProps = dispatch => {
	const changeCenter = coords => {
		dispatch(changeCurrentCenter(coords))
	}
	const dragPoint = (id, coords) => {
		dispatch(changePointCoords(id, coords))
	}

	return {
		changeCenter,
		dragPoint,
	}
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
	const { dragPoint, changeCenter } = dispatchProps
	const { points, polylineCoords } = stateProps
	const placemarks = points.map(point => (
		<Placemark
			key={[point.id]}
			geometry={point.coords}
			options={{
				draggable: true,
				openBalloonClick: true,
			}}
			properties={{
				balloonContent: `<h4>${point.name}</h4>`,
				hintContent: `<h4>${point.name}</h4>`,
			}}
			modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
			onDragEnd={e => {
				const pmark = e.originalEvent.target
				dragPoint(pmark.id, pmark.geometry.getCoordinates())
			}}
			instanceRef={placemarkRef => placemarkRef && (placemarkRef.id = point.id)}
		/>
	))
	return {
		placemarks,
		polylineCoords,
		changeCenter,
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
	mergeProps
)(Map)
