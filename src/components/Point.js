import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

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
	margin-left: auto;
	border-radius: 10px;
`

const Point = props => {
	const {
		data: { id, name },
		onDel,
		index,
	} = props
	return (
		<Draggable draggableId={id} index={index}>
			{(provided, snapshot) => (
				<PointItem
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
				>
					<PointName>{name}</PointName>
					<PointClose onClick={() => onDel(id)}>X</PointClose>
				</PointItem>
			)}
		</Draggable>
	)
}

export default Point

Point.propTypes = {
	data: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
	}).isRequired,
	onDel: PropTypes.func.isRequired,
	index: PropTypes.number.isRequired,
}
