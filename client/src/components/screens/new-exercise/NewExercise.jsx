import cn from 'clsx'
import { Controller } from 'react-hook-form'

import Loader from '../../ui/Loader'
import Alert from '../../ui/alert/Alert'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'

import Layout from '../../layout/Layout'

import { getFullIconPath } from '../../../utils/full-icon-path.util'

import styles from './NewExercise.module.scss'
import { getIconPath } from './icon-path.util'
import { useNewExercise } from './useNewExercise'

const data = ['chest', 'shoulders', 'biceps', 'legs', 'hit', 'back']

const NewExercise = () => {
	const {
		register,
		handleSubmit,
		errors,
		control,
		isSuccess,
		error,
		isLoading,
		onSubmit
	} = useNewExercise()

	return (
		<>
			<Layout
				bgImage='/images/new-exercise-bg.jpg'
				heading='Create new exercise'
				backLink='/new-workout'
			/>
			<div className='wrapper-inner-page'>
				{error && <Alert type='error' text={error} />}
				{isSuccess && <Alert text='Exercise created successfully' />}
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.name?.message}
						name='name'
						register={register}
						options={{
							required: 'Name is required'
						}}
						type='text'
						placeholder='Enter name'
					/>

					<Field
						error={errors?.times?.message}
						name='times'
						register={register}
						options={{
							valueAsNumber: true,
							validate: (value) => value > 0 || 'Times must be number',
							required: 'Times is required'
						}}
						placeholder='Enter times'
					/>

					<Controller
						name='iconPath'
						control={control}
						render={({ field: { value, onChange } }) => (
							<div className={styles.images}>
								{data.map((name) => (
									<img
										key={`ex img ${name}`}
										src={getFullIconPath(getIconPath(name))}
										alt={name}
										className={cn({
											[styles.active]: value === getIconPath(name)
										})}
										onClick={() => onChange(getIconPath(name))}
										draggable={false}
										height='45'
									/>
								))}
							</div>
						)}
					/>

					{errors?.iconPath && (
						<div className='error'>{errors?.iconPath?.message}</div>
					)}

					<Button>Create</Button>
				</form>
			</div>
		</>
	)
}

export default NewExercise
