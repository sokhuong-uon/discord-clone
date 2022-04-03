import { useState } from 'react'
const Button = () => {
	const [hover, setHover] = useState(false)
	return (
		<button
			className="h-16 bg-teal-700 w-44"
			onPointerEnter={() => setHover(true)}
			onPointerLeave={() => {
				setHover(false)
			}}
		>
			{hover ? 'hovering' : 'not hovering'}
		</button>
	)
}

export { Button }
