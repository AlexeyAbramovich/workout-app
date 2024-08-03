import { useEffect, useRef, useState } from 'react'

export const useOnClickOutside = (initialValue) => {
	const [isShow, setIsShow] = useState(initialValue)
	const ref = useRef(null)

	const handleClickOutside = (event) => {
		if (ref.current && !ref.current.contains(event.target)) {
			setIsShow(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true)

		return () => {
			document.removeEventListener('click', handleClickOutside, true)
		}
	})

	return { ref, isShow, setIsShow }
}
