import { Link } from 'react-router-dom'
import { MintRoute } from '../routes'
import PageWrapper from '../../components/PageWrapper/PageWrapper'

const Home: React.FC = () => {
	return (
		<PageWrapper className='default'>
			<h1>Home Page</h1>
			<Link to={`${MintRoute.path}`}>Mint</Link>
		</PageWrapper>
	)
}

export default Home
