import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Point from './Point'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

const Wrapper = styled.div`
	width: 20%;
	background-color: #f1f3f4;
	border-right: 2px solid #e5e5e5;
	display: flex;
	flex-direction: column;
	align-items: center;
	min-width: 220px;
	padding: 0px 5px;
`
const InputPointWrapper = styled.div`
	margin-top: 10px;
	display: flex;
	flex-direction: row;
	width: 100%;
`

const Input = styled.input`
	width: 100%;
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
	width: 100%;
	overflow: auto;
`

const PointBar = props => {
	const [pointInputValue, setPointInputValue] = useState('')
	const inputRef = useRef(null)
	const { points, onDelPoint, onAddPoint, onReorder } = props
	const onDragEnd = event => {
		console.log(event)
		if (!event.destination) return
		onReorder(event.source.index, event.destination.index)
	}
	const clearInput = () => {
		inputRef.current.value = ''
		setPointInputValue('')
	}
	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Wrapper>
				<InputPointWrapper>
					<Input
						onChange={e => setPointInputValue(e.target.value)}
						onKeyPress={e => {
							if (e.charCode === 13) {
								onAddPoint(pointInputValue)
								clearInput()
							}
						}}
						placeholder={'Point'}
						ref={inputRef}
					/>
					<AddButton
						onClick={() => {
							onAddPoint(pointInputValue)
							clearInput()
						}}
					>
						>
					</AddButton>
				</InputPointWrapper>
				<Droppable droppableId="pointlist">
					{(provided, snapshot) => (
						<PointsList ref={provided.innerRef} {...provided.droppableProps}>
							{points.map((point, index) => (
								<Point
									key={point.id}
									data={point}
									index={index}
									onDel={onDelPoint}
								/>
							))}
							{provided.placeholder}
						</PointsList>
					)}
				</Droppable>
			</Wrapper>
		</DragDropContext>
	)
}

export default PointBar

PointBar.propTypes = {
	points: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			coords: PropTypes.arrayOf(PropTypes.number),
			name: PropTypes.string.isRequired,
		})
	),
	onDelPoint: PropTypes.func.isRequired,
	onAddPoint: PropTypes.func.isRequired,
	onReorder: PropTypes.func.isRequired,
}
