import { Link } from 'react-router-dom'
import { HomeRoute, MintRoute } from '../../pages/routes'
import Logo from '../Logo/NFTLogo'
import useStyles from './Header.styles'

const Header: React.FC = () => {
	const classes = useStyles()

	return (
		<header className={classes.header}>
			<nav className={classes.nav}>
				<Link
					to={{ pathname: HomeRoute.path, hash: '#about' }}
					className={classes.link}
				>
					About
				</Link>
				<Link
					to={{ pathname: HomeRoute.path, hash: '#dao' }}
					className={classes.link}
				>
					DAO
				</Link>
				<Link to={HomeRoute.path}>
					<Logo className="defaultRect" />
				</Link>
				<Link
					to={{ pathname: HomeRoute.path, hash: '#faq' }}
					className={classes.link}
				>
					FAQ
				</Link>
				<Link to={MintRoute.path} className={classes.link}>
					Mint
				</Link>
			</nav>
		</header>
	)
}

export default Header
