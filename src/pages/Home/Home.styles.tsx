import { createUseStyles } from 'react-jss'
import {
	black,
	dark_purple,
	orange,
	paper_white,
	teal,
	text_shadow,
	white,
} from '../../config/colours'

const styles = {
	page: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100vw',
		overflowX: 'hidden',
		position: 'relative',
	},
	section: {
		width: '100%',
		minHeight: '50vh',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '4em 0em',
	},
	hero: {
		composes: '$section',
		textAlign: 'center',
		'& p': {
			maxWidth: '50%',
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
		},
	},
	faq: {
		composes: '$section',
		position: 'relative',
		backgroundColor: orange,
		'& div': {
			zIndex: '100',
			backgroundColor: paper_white,
			color: black,
			maxWidth: '60em',
		},
	},
	centered: {
		textAlign: 'center',
	},
	hand: {
		filter: `drop-shadow(-10px 5px 2px ${text_shadow})`,
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
