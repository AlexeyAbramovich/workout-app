import styles from '../Exercise.module.scss'

const tableHeaders = ['Previous', 'Weight & Repeat', 'Completed']

const TableHeaders = () => {
	return (
		<div className={styles.row}>
			{tableHeaders.map((header) => (
				<div key={header}>
					<span>{header}</span>
				</div>
			))}
		</div>
	)
}

export default TableHeaders
