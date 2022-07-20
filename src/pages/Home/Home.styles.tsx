import { createUseStyles } from 'react-jss'
import {
	black,
	dark_purple,
	orange,
	paper_white,
	image_shadow,
	white,
	text_shadow,
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
			fontSize: '3em',
			textShadow: `3px 3px 5px ${text_shadow}`,
			margin: '0',
			marginBottom: '-0.5em',
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
		'& h2, h3': {
			fontFamily: headingFontFamily,
			textTransform: 'uppercase',
			fontSize: '2em',
			textShadow: `3px 3px 5px ${text_shadow}`,
			margin: '0',
		},
	},
	hero: {
		composes: '$section',
		textAlign: 'center',
		'& p': {
			maxWidth: '50%',
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
		'& div': {
			maxWidth: '60em',
		},
	},
	aside: {
		padding: '1em',
		display: 'flex',
		alignItems: 'center',
	},
	council: {
		composes: '$section',
		backgroundColor: dark_purple,
		'& div': {
			maxWidth: '60em',
			padding: '0 2em',
		},
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
		maxWidth: '50em',
		padding: '0 2em',
	},
	centered: {
		textAlign: 'center',
	},
	hand: {
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
	},
	longTongueHand: {
		composes: '$hand',
		width: '300px',
		transform: 'rotate(-15deg)',
	},
	barcodeHand: {
		composes: '$hand',
		width: '300px',
		marginLeft: '-6em',
		marginTop: '-2em',
		transform: 'rotate(15deg)',
	},
	pinkHand: {
		composes: '$hand',
		position: 'absolute',
		width: '400px',
		left: '0',
		top: '5em',
		zIndex: '50',
		transform: 'rotate(-25deg)',
	},
	grayHand: {
		composes: '$hand',
		position: 'absolute',
		width: '400px',
		right: '0',
		bottom: '5em',
		zIndex: '50',
		transform: 'rotate(25deg)',
	},
}

export default createUseStyles(styles)
