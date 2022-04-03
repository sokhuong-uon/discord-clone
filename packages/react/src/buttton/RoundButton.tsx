import { ReactChild } from 'react'

const RoundButton = ({ children, ...props }: { children?: ReactChild }) => {
	return (
		<button {...props} className="w-full h-full rounded-full select-none focus:outline-none">
			{children}
		</button>
	)
}
export { RoundButton }
