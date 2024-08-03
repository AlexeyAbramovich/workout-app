import React from 'react'

const TableInput = ({
	type = 'number',
	pattern = null,
	defaultValue,
	value,
	disabled = true,
	onChange = null
}) => {
	return (
		<input
			type={type}
			pattern={pattern}
			defaultValue={defaultValue}
			value={value}
			onChange={onChange}
			disabled={disabled}
		/>
	)
}

export default TableInput
