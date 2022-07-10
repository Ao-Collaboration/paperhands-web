import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { HomeRoute, MintRoute } from './routes'
import Profile from './Mint/Mint'
import { useContext } from 'react'
import { Web3Context } from '../context/Web3/Web3Context'
import ConnectWallet from './ConnectWallet/ConnectWallet'
import Home from './Home/Home'

const Router: React.FC = () => {
	const { web3Provider } = useContext(Web3Context)

	if (!web3Provider) {
		// Require wallet connection
		return (<ConnectWallet />)
	}
	return (
		<>
			<HashRouter>
				<Routes>
					<Route path={HomeRoute.path} element={<Home />} />
					<Route path={MintRoute.path} element={<Profile />} />
					<Route path="*" element={<Navigate to={HomeRoute.path} />} />
				</Routes>
			</HashRouter>
		</>
	)
}

export default Router
