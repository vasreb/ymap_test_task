import React, { useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import PointBar from './PointBar'
import { Map, Placemark, Polyline } from 'react-yandex-maps'
import changeCurrentCenter from '../actions/changeCurrentCenter'
import defaultCoords from '../constants/defCoords'
import changePointCoords from '../actions/changePointCoords'

const Background = styled.div`
	width: 100%;
	height: 100%;
	background-color: #f7f7f7;
	display: flex;
	flex-direction: column;
`
const MainWrapper = styled.main`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
`

const Header = styled.header`
	height: 50px;
	background-color: #f1f3f4;
	border-bottom: 2px solid #e5e5e5;
`

const StyledMap = styled(Map)`
	width: 100%;
	height: 100%;
`

const App = props => {
	const [mapInstance, setMapRef] = useState()
	const { points, changeBounds, dragPoint } = props
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

	const polylineCoords = points.map(point => point.coords)
	return (
		<Background>
			<Header />
			<MainWrapper>
				<PointBar />
				<StyledMap
					instanceRef={map => setMapRef(map)}
					defaultState={{ center: defaultCoords, zoom: 10 }}
					onBoundsChange={() => changeBounds(mapInstance.getCenter())}
				>
					{placemarks}
					<Polyline
						geometry={polylineCoords}
						options={{
							strokeStyle: {
								style: 'dashdot',
								offset: 10,
							},
							strokeWidth: 7,
						}}
					/>
				</StyledMap>
			</MainWrapper>
		</Background>
	)
}

const mapStateToProps = state => {
	const { points } = state
	return {
		points,
	}
}

const mapDispatchToProps = dispatch => {
	const changeBounds = coords => {
		dispatch(changeCurrentCenter(coords))
	}
	const dragPoint = (id, coords) => {
		dispatch(changePointCoords(id, coords))
	}
	return {
		changeBounds,
		dragPoint,
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)
