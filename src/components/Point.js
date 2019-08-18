import React from 'react'
import styled from 'styled-components'

const PointItem = styled.li`
	background-color: #e5e5e5;
	display: flex;
	flex-direction: row;
	padding: 5px 15px;
	padding-right: 5px;
	margin-top: 5px;
`

const PointName = styled.h3`
	margin: 0;
	padding: 0;
	font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
		Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-size: 20px;
	word-break: break-all;
	word-wrap: break-word;
	flex-shrink: 0;
	max-width: 200px;
`

const PointClose = styled.button`
	border: none;
`

const Point = props => {
	const { name, onDel } = props
	return (
		<PointItem>
			<PointName>{name}</PointName>
			<PointClose onClick={onDel}>X</PointClose>
		</PointItem>
	)
}

export default Point
