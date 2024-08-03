import { useMutation, useQuery } from '@tanstack/react-query'
import React, { Fragment } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import WorkoutLogService from '../../../../services/workout/workout-log.service'
import Button from '../../../ui/button/Button'
import Loader from '../../../ui/Loader'
import ExerciseItem from './ExerciseItem'
import HeaderWorkout from './HeaderWorkout'
import styles from './Workout.module.scss'

const Workout = () => {
	const { id } = useParams()

	const { data, isSuccess, isLoading } = useQuery({
		queryKey: ['get workout', id],
		queryFn: () => WorkoutLogService.getById(id),
		select: ({ data }) => data
	})

	const navigate = useNavigate()

	const { mutate } = useMutation({
		mutationKey: ['complete workout'],
		mutationFn: () => WorkoutLogService.complete(id),
		onSuccess: () => {
			navigate('/workouts')
		}
	})

	return (
		<>
			<HeaderWorkout data={data} isSuccess={isSuccess} />

			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<div style={{ width: '90%', margin: '0 auto' }}></div>

				{isLoading ? (
					<Loader />
				) : (
					<div className={styles.wrapper}>
						{data?.exerciseLogs?.map((exerciseLog, index) => (
							<Fragment key={exerciseLog.id}>
								<ExerciseItem exerciseLog={exerciseLog} />
								{index % 2 !== 0 && index !== data.exerciseLogs.length - 1 && (
									<div className='styles.line' />
								)}
							</Fragment>
						))}
					</div>
				)}
				<Button clickHandler={() => mutate()}>Complete Workout</Button>
			</div>
		</>
	)
}

export default Workout
