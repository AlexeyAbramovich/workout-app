import cn from 'clsx'
import React from 'react'
import Header from '../../../layout/header/Header'
import stylesLayout from '../../../layout/Layout.module.scss'
import styles from './Workout.module.scss'

const HeaderWorkout = ({ data, isSuccess }) => {
	return (
		<div
			className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
			style={{
				backgroundImage: `url('/images/home-bg.png')`,
				height: 356
			}}
		>
			<Header backLink='/workouts' />

			{isSuccess && (
				<div>
					<time className={styles.time}>{data.minute + ' min.'}</time>
					<h1 className={stylesLayout.heading}>{data.workout.name}</h1>
				</div>
			)}
		</div>
	)
}

export default HeaderWorkout
