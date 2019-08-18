import React from 'react'
import styled from 'styled-components'
import PointBar from '../containers/PointBar'
import Map from '../containers/Map'

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
	return (
		<Background>
			<Header />
			<MainWrapper>
				<PointBar />
				<StyledMap />
			</MainWrapper>
		</Background>
	)
}

export default App
