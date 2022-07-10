export interface Route {
	name: string,
	path: string,
	basePath?: string,
}

export const HomeRoute: Route = {
	name: 'Home',
	path: '/',
}

export const MintRoute: Route = {
	name: 'Mint',
	path: '/mint'
}
