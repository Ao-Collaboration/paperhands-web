import { createUseStyles } from 'react-jss'
import { image_shadow, text_shadow, white } from '../../config/colours'
import { headingFontFamily } from '../../config/jss-vars'

const styles = {
	page: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100vw',
		overflowX: 'hidden',
		position: 'relative',
		'& h1': {
			fontFamily: headingFontFamily,
			textTransform: 'uppercase',
			fontSize: '4em',
			textShadow: `3px 3px 5px ${text_shadow}`,
			margin: '0',
		},
	},
	hero: {
		textAlign: 'center',
		'& p': {
			maxWidth: '50rem',
			fontSize: '1.3em',
		},
		'& sub': {
			fontSize: '0.5em',
		},
	},
	hand: {
		position: 'absolute',
		filter: `drop-shadow(-10px 5px 2px ${image_shadow})`,
	},
	barfHand: {
		composes: '$hand',
		position: 'absolute',
		right: '-5em',
		width: '400px',
		transform: 'rotate(-40deg)',
	},
	section: {
		width: '100%',
		backgroundColor: white,
		display: 'flex',
		minHeight: '20em',
		alignItems: 'center',
		justifyContent: 'center',
	},
}

export default createUseStyles(styles)
