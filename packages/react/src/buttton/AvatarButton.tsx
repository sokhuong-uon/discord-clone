enum STATUS {
	ONLINE,
	IDLE,
	DO_NOT_DISTURB,
	INVISIBLE,
}

const AvatarButton = ({ avatar }: { avatar?: string }) => {
	return (
		<button className="flex items-center justify-center w-full h-full">
			{avatar && <img src={avatar} alt="avatar" />}
			{!avatar && <div className="w-full h-full bg-blue-700"></div>}
		</button>
	)
}
export { AvatarButton }
