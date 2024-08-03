import Loader from '../../ui/Loader'
import ExerciseError from './ExerciseError'
import HeaderExercise from './HeaderExercise'

import { useExerciseLog } from './hooks/useExerciseLog'
import TableHeaders from './table/TableHeaders'
import TableRow from './table/TableRow'

import styles from './Exercise.module.scss'

const Exercise = () => {
	const {
		data,
		isSuccess,
		isLoading,
		toggleTime,
		error,
		onChangeState,
		getState
	} = useExerciseLog()

	return (
		<>
			<HeaderExercise data={data} isSuccess={isSuccess} />

			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<ExerciseError errors={[error]} />
				{isLoading ? (
					<Loader />
				) : (
					<div className={styles.wrapper}>
						<TableHeaders />

						{data?.times.map((item) => (
							<TableRow
								getState={getState}
								onChangeState={onChangeState}
								toggleTime={toggleTime}
								item={item}
								key={item.id}
							/>
						))}
					</div>
				)}
			</div>
		</>
	)
}

export default Exercise
