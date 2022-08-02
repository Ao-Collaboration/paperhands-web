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
			<p className={classes.title}>Paper Hand Society</p>
			<div className={classes.linkGroup}>
				<a href={DISCORD_LINK} target="_blank">
					<DiscordLogo />
				</a>
				<a href={TWITTER_LINK} target="_blank">
					<TwitterLogo />
				</a>
				<a href={OPENSEA_LINK} target="_blank">
					<OpenseaLogo />
				</a>
			</div>
			<div className={classes.copy}>
				<span className={`${classes.left} ${classes.text}`}>
					Ⓒ Paper Hand Society 2022
				</span>
				<img src="/img/grayish-hand.png" className={classes.hand} />
				<span className={`${classes.right} ${classes.text}`}>
					Designed by{' '}
					<a href={MJORK_LINK} target="_blank">
						mjork.eth
					</a>{' '}
					| Developed by{' '}
					<a href={MILKYTASTE_LINK} target="_blank">
						Ao Collab
					</a>
				</span>
			</div>
		</footer>
	)
}

export default Footer
