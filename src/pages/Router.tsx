import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { HomeRoute, MintRoute } from './routes'
import Mint from './Mint/Mint'
import Home from './Home/Home'

const Router: React.FC = () => {
	return (
		<>
			<HashRouter>
				<Routes>
					<Route path={HomeRoute.path} element={<Home />} />
					<Route path={MintRoute.path} element={<Mint />} />
					<Route path="*" element={<Navigate to={HomeRoute.path} />} />
				</Routes>
			</HashRouter>
		</>
	)
}

export default Router
