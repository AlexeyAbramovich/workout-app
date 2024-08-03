import cn from 'clsx'
import { getFullIconPath } from '../../../utils/full-icon-path.util'
import Header from '../../layout/header/Header'
import stylesLayout from '../../layout/Layout.module.scss'
import styles from './Exercise.module.scss'

const HeaderExercise = ({ data, isSuccess }) => {
	return (
		<div
			className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
			style={{
				backgroundImage: `url('/images/ex-bg-1.jpg')`,
				height: 300
			}}
		>
			<Header
				backLink={isSuccess ? `/workout/${data.workoutLogId}` : '/workouts'}
			/>

			{isSuccess && (
				<div className={styles.heading}>
					<img
						src={getFullIconPath(data.exercise.iconPath)}
						height={34}
						alt=''
						draggable={false}
					/>
					<h1 className={stylesLayout.heading}>{data.exercise.name}</h1>
				</div>
			)}
		</div>
	)
}

export default HeaderExercise
