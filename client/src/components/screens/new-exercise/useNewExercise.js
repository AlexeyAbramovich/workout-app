import { useMutation } from '@tanstack/react-query'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import ExerciseService from '../../../services/exercise/exercise.service'

export const useNewExercise = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		control
	} = useForm({
		mode: 'onChange'
	})

	const { isSuccess, error, isLoading, mutate } = useMutation({
		mutationKey: ['create exercise'],
		mutationFn: (body) => {
			ExerciseService.create(body)
		},
		onSuccess: () => {
			reset()
		}
	})

	const onSubmit = (data) => {
		mutate(data)
	}

	return useMemo(
		() => ({
			register,
			handleSubmit,
			errors,
			control,
			isSuccess,
			error,
			isLoading,
			onSubmit
		}),
		[errors, isSuccess, error, isLoading]
	)
}
