import { createUseStyles } from 'react-jss'
import {
	black,
	dark_purple,
	orange,
	paper_white,
	image_shadow,
	white,
	text_shadow,
	teal,
} from '../../config/colours'
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
	section: {
		width: '100%',
		minHeight: '50vh',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '4em 0em',
		position: 'relative',
		'& h2, h3': {
			fontFamily: headingFontFamily,
			textTransform: 'uppercase',
			fontSize: '2em',
			textShadow: `3px 3px 5px ${text_shadow}`,
			margin: '0',
		},
		'& div': {
			maxWidth: '50rem',
		},
	},
	hero: {
		composes: '$section',
		textAlign: 'center',
		'& p': {
			maxWidth: '50rem',
			fontSize: '1.3em',
		},
		'& sub': {
			fontSize: '0.5em',
		},
	},
	about: {
		composes: '$section',
		backgroundColor: white,
		color: black,
		marginBottom: '-8em',
	},
	council: {
		composes: '$section',
		backgroundColor: dark_purple,
		zIndex: '100',
	},
	faq: {
		composes: '$section',
		position: 'relative',
		backgroundColor: orange,
	},
	paper: {
		zIndex: '100',
		backgroundColor: paper_white,
		color: black,
		padding: '0 2em',
	},
	centered: {
		textAlign: 'center',
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
	vineHand: {
		composes: '$hand',
		width: '400px',
		right: '-5em',
		top: '-4em',
	},
	longTongueHand: {
		composes: '$hand',
		width: '300px',
		top: '4em',
		left: '-8em',
		transform: 'rotate(-15deg)',
	},
	barcodeHand: {
		composes: '$hand',
		width: '300px',
		top: '4em',
		left: '8em',
		marginLeft: '-6em',
		marginTop: '-2em',
		transform: 'rotate(15deg)',
	},
	pinkHand: {
		composes: '$hand',
		width: '400px',
		left: '0',
		top: '5em',
		zIndex: '50',
		transform: 'rotate(-25deg)',
	},
	grayHand: {
		composes: '$hand',
		width: '400px',
		right: '0',
		bottom: '5em',
		zIndex: '50',
		transform: 'rotate(25deg)',
	},
	jaggyBase: {
		height: '4em',
		width: '100%',
		'&:after': {
			content: '""',
			display: 'block',
			height: '4em',
			width: '100%',
			clipPath:
				'polygon(0 100%, 15% 20%, 30% 85%, 40% 20%, 60% 85%, 80% 20%, 100% 100%)',
		},
	},
	jaggyWhite: {
		composes: '$jaggyBase',
		backgroundColor: teal,
		'&:after': {
			backgroundColor: white,
		},
	},
	jaggyPurple: {
		composes: '$jaggyBase',
		backgroundColor: white,
		'&:after': {
			backgroundColor: dark_purple,
		},
	},
	jaggyOrange: {
		composes: '$jaggyBase',
		backgroundColor: dark_purple,
		'&:after': {
			backgroundColor: orange,
		},
	},
	paperTop: {
		composes: '$jaggyBase',
		backgroundColor: orange,
		marginLeft: '-4em',
		'&:after': {
			backgroundColor: paper_white,
			width: '100%',
			margin: 'auto',
			padding: '0 2em',
		},
	},
	paperBottom: {
		composes: '$jaggyBase',
		backgroundColor: orange,
		marginLeft: '-4em',
		zIndex: '500',
		'&:after': {
			backgroundColor: paper_white,
			width: '100%',
			margin: 'auto',
			padding: '0 2em',
			clipPath:
				'polygon(100% 0, 100% 88%, 75% 57%, 44% 80%, 32% 36%, 0 100%, 0 0)',
		},
	},
}

export default createUseStyles(styles)
