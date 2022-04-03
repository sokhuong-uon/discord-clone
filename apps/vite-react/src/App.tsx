import { AvatarButton, SideNavigation, NavigationItem } from '@discord-clone/react'

const App = () => {
	return (
		<section className="flex w-screen h-screen bg-pink-700 overflow-clip">
			<SideNavigation></SideNavigation>
			<section
				id="subnavigation"
				className="w-[15.5rem] h-full bg-gray-900 flex-shrink-0"
			></section>
			<main id="main" className="flex-1 h-full bg-slate-800"></main>
		</section>
	)
}

export { App }
