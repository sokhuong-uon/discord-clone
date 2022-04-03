import { useState } from 'react'
import { AvatarButton } from '../buttton'
const NavigationItem = ({ active = false, avatar }: { avatar?: string; active: boolean }) => {
	const [hover, setHover] = useState(false)
	return (
		<>
			<div className="flex justify-start w-full h-12 mb-2 ">
				<div className="flex items-center justify-start w-2 h-full ">
					<div
						className={`w-1/2 bg-white rounded-r-full transition-[height] duration-300 ${
							active ? 'h-5/6' : hover ? 'h-1/2' : 'h-2'
						}`}
					></div>
				</div>
				<div
					onPointerEnter={event => {
						event.stopPropagation()
						setHover(true)
					}}
					onPointerLeave={event => {
						event.stopPropagation()
						setHover(false)
					}}
					className="relative w-12 h-12 cursor-pointer focus:outline-none"
				>
					<div
						className={`w-12 h-12 bg-pink-600 overflow-clip transition-[border-radius] ${
							hover || active ? 'rounded-xl' : 'rounded-full'
						}`}
					>
						<AvatarButton avatar={avatar}></AvatarButton>
					</div>
					<div className="absolute w-5 h-5 bg-black rounded-full -bottom-0.5 -right-0.5 flex items-center justify-center">
						<div className="w-4 h-4 bg-pink-700 rounded-full"></div>
					</div>
				</div>
			</div>
		</>
	)
}

export { NavigationItem }
