import AoLogo from '../Logo/AoLogo'
import NFTLogo from '../Logo/NFTLogo'
import useStyles from './Footer.styles'

const Footer: React.FC = () => {
	const classes = useStyles()

	return (
		<footer className={classes.footer}>
			<div className={classes.inner}>
				<NFTLogo />
				<a href='https://block.aocollab.tech' className={classes.right}>
					<AoLogo />
				</a>
			</div>
		</footer>
	)
}

export default Footer
