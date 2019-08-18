import React, { useState } from 'react'
import styled from 'styled-components'
import Point from './Point'
import addPoint from '../actions/addPoint'
import delPoint from '../actions/delPoint'
import reorder from '../utilities/reorder'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import reorderPoints from '../actions/reorderPoints'

import { connect } from 'react-redux'

const Wrapper = styled.div`
	width: 20%;
	background-color: #f1f3f4;
	border-right: 2px solid #e5e5e5;
	display: flex;
	flex-direction: column;
	align-items: center;
`
const InputPointWrapper = styled.div`
	margin-top: 10px;
	display: flex;
	flex-direction: row;
`

const Input = styled.input`
	width: 90%;
	height: 30px;
	border-radius: 10px;
	border: 1px solid #e5e5e5;
	padding-left: 5px;
`
const AddButton = styled.button`
	font-size: 20px;
	color: darkgrey;
	background-color: transparent;
	border: 0;
`

const PointsList = styled.ul`
	display: flex;
	flex-direction: column;
	list-style: none;
	margin: 0;
	padding: 0;
`

const PointBar = props => {
	const [newPointName, setNewPointName] = useState('')
	const { points, onDelPoint, onAddPoint, onReorder } = props
	const onDragEnd = event => {
		console.log(event)
		if (!event.destination) return
		onReorder(event.source.index, event.destination.index)
	}
	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Wrapper>
				<InputPointWrapper>
					<Input
						onChange={e => setNewPointName(e.target.value)}
						onKeyPress={e => {
							if (e.charCode === 13) {
								onAddPoint(e.target.value)
							}
						}}
						placeholder={'Point'}
					/>
					<AddButton
						onClick={() => {
							onAddPoint(newPointName)
						}}
					>
						>
					</AddButton>
				</InputPointWrapper>
				<Droppable droppableId="pointlist">
					{(provided, snapshot) => (
						<PointsList ref={provided.innerRef} {...provided.droppableProps}>
							{points.map((point, index) => (
								<Draggable key={point.id} draggableId={point.id} index={index}>
									{(provided, snapshot) => (
										<li
											ref={provided.innerRef}
											{...provided.draggableProps}
											{...provided.dragHandleProps}
										>
											<Point
												name={point.name}
												onDel={() => onDelPoint(point.id)}
											/>
										</li>
									)}
								</Draggable>
							))}
							{provided.placeholder}
						</PointsList>
					)}
				</Droppable>
			</Wrapper>
		</DragDropContext>
	)
}

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
