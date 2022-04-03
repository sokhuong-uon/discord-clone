import { Suspense, useEffect, useState } from 'react'
import { NavigationItem } from './NavigationItem'

type Server = {
	id: string
	name: string
	avatar: string
}

const SideNavigation = () => {
	const [servers, setServers] = useState<Server[]>([])
	useEffect(() => {
		fetch('/data/server.json')
			.then(res => res.json())
			.then(value => setServers(value))
	}, [])
	return (
		<nav
			id="sidebar"
			className="flex-shrink-0 w-16 h-full py-3 overflow-y-auto hidescrollbar bg-zinc-800 overflow-x-clip "
		>
			<Suspense fallback={null}>
				<NavigationItem active={false}></NavigationItem>
				{/* divide */}
				<Divider></Divider>

				{servers.map((server, index) => (
					<NavigationItem key={index} active={false} avatar={server.avatar}></NavigationItem>
				))}

				<NavigationItem active={false}></NavigationItem>
				<NavigationItem active={false}></NavigationItem>
				<Divider></Divider>
				<NavigationItem active={false}></NavigationItem>
			</Suspense>
		</nav>
	)
}

const Divider = () => {
	return (
		<div className="flex items-center justify-center w-full h-1">
			<div className="w-1/2 mb-2 h-[0.15rem] bg-zinc-500 rounded-full"></div>
		</div>
	)
}

export { SideNavigation }
