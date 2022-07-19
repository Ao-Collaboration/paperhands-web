import { Link } from 'react-router-dom'
import {
	DISCORD_LINK,
	MILKYTASTE_LINK,
	MJORK_LINK,
	OPENSEA_LINK,
	TWITTER_LINK,
} from '../../config/content'
import DiscordLogo from '../Logo/DiscordLogo'
import OpenseaLogo from '../Logo/OpenseaLogo'
import TwitterLogo from '../Logo/TwitterLogo'
import useStyles from './Footer.styles'

const Footer: React.FC = () => {
	const classes = useStyles()

	return (
		<footer className={classes.footer}>
			<p className={classes.title}>Paper Hands Society</p>
			<div className={classes.linkGroup}>
				<a href={DISCORD_LINK}>
					<DiscordLogo />
				</a>
				<a href={TWITTER_LINK}>
					<TwitterLogo />
				</a>
				<a href={OPENSEA_LINK}>
					<OpenseaLogo />
				</a>
			</div>
			<div className={classes.copy}>
				<span className={`${classes.left} ${classes.text}`}>
					Ⓒ Paper Hands Society 2022
				</span>
				<img src="/img/grayish-hand.png" className={classes.hand} />
				<span className={`${classes.right} ${classes.text}`}>
					Designed by <a href={MJORK_LINK}>mjork.eth</a> | Developed by{' '}
					<a href={MILKYTASTE_LINK}>MilkyTaste</a>
				</span>
			</div>
		</footer>
	)
}

export default Footer
