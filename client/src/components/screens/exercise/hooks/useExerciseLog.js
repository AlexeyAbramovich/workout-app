import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ExerciseLogService from '../../../../services/exercise/exercise-log.service'
import { useUpdateLogTime } from './useUpdateLogTime'

export const useExerciseLog = () => {
	const [times, setTimes] = useState([])

	const { updateTime, error } = useUpdateLogTime(times)

	const { id } = useParams()

	const { data, isSuccess, isLoading } = useQuery({
		queryKey: ['get exercise log', id],
		queryFn: () => ExerciseLogService.getById(id),
		select: ({ data }) => data
	})

	useEffect(() => {
		if (isSuccess) {
			if (data?.times?.length) setTimes(data.times)
		}
	}, [data])

	const onChangeState = (timeId, key, value) => {
		const newTimes = times.map((time) => {
			if (time.id === timeId) {
				return { ...time, [key]: value }
			}

			return time
		})

		setTimes(newTimes)
	}

	const getTime = (timeId) => times.find((time) => time.id === timeId)

	const getState = (timeId, key) => {
		const time = getTime(timeId)
		return time ? time[key] : 0
	}

	const toggleTime = (timeId, isCompleted) => {
		const time = getTime(timeId)
		updateTime({
			timeId,
			body: {
				isCompleted,
				repeat: +time.repeat,
				weight: +time.weight
			}
		})
	}

	return {
		data,
		isSuccess,
		isLoading,
		getTime,
		toggleTime,
		error,
		onChangeState,
		getState
	}
}
