import cn from 'clsx'
import styles from '../Exercise.module.scss'
import TableInput from './TableInput'

const TableRow = ({ item, getState, onChangeState, toggleTime }) => {
	return (
		<div
			className={cn(styles.row, {
				[styles.completed]: item.isCompleted
			})}
			key={`times ${item.id}`}
		>
			<div
				className={styles.opacity}
				key={`Prev ${item.id}/${item.prevWeight}`}
			>
				<TableInput defaultValue={item.prevWeight} />
				<i>kg{item.isCompleted ? '' : ' '}/</i>
				<TableInput defaultValue={item.prevRepeat} />
			</div>

			<div key={`RepeatWeight ${item.id}/${item.weight}`}>
				<TableInput
					type='tel'
					pattern='[0-9]*'
					value={getState(item.id, 'weight')}
					onChange={(e) => onChangeState(item.id, 'weight', e.target.value)}
					disabled={item.isCompleted}
				/>
				<i>kg{item.isCompleted ? '' : ' '}/</i>
				<TableInput
					type='tel'
					pattern='[0-9]*'
					value={getState(item.id, 'repeat')}
					onChange={(e) => onChangeState(item.id, 'repeat', e.target.value)}
					disabled={item.isCompleted}
				/>
			</div>

			<div key={`Completed ${item.id}/${item.isCompleted}`}>
				<img
					src={
						getState(item.id, 'isCompleted')
							? '/images/exercises/check-completed.svg'
							: '/images/exercises/check.svg'
					}
					className={styles.checkbox}
					alt=''
					onClick={() => {
						toggleTime(item.id, !getState(item.id, 'isCompleted'))
					}}
				></img>
			</div>
		</div>
	)
}

export default TableRow
