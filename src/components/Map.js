import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Map as YMap, Polyline } from 'react-yandex-maps'
import defaultCoords from '../constants/defCoords'

const StyledMap = styled(YMap)`
	width: 100%;
	height: 100%;
`

const Map = props => {
	const [mapInstance, setMapRef] = useState()
	const { placemarks, changeCenter, polylineCoords } = props
	return (
		<StyledMap
			instanceRef={map => setMapRef(map)}
			defaultState={{ center: defaultCoords, zoom: 10 }}
			onBoundsChange={() => changeCenter(mapInstance.getCenter())}
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
	)
}

export default Map

Map.propTypes = {
	placemarks: PropTypes.arrayOf(PropTypes.object).isRequired,
	changeCenter: PropTypes.func.isRequired,
	polylineCoords: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
}
