import cn from 'clsx'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getFullIconPath } from '../../../../utils/full-icon-path.util'
import styles from './Workout.module.scss'

const ExerciseItem = ({ exerciseLog }) => {
	const navigate = useNavigate()

	return (
		<div
			className={cn(styles.item, {
				[styles.completed]: exerciseLog.isCompleted
			})}
		>
			<button
				aria-label='Move to exercise'
				onClick={() => navigate(`/exercise/${exerciseLog.id}`)}
			>
				<span>{exerciseLog.exercise.name}</span>
				<img
					src={getFullIconPath(exerciseLog.exercise.iconPath)}
					height={34}
					alt=''
					draggable={false}
				/>
			</button>
		</div>
	)
}

export default ExerciseItem
