import { createUseStyles } from 'react-jss'
import { black, green, white } from '../../config/colours'

const styles = {
	footer: {
		background: green,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	title: {
		color: white,
		fontSize: '2em',
		marginBottom: '0.2em',
	},
	linkGroup: {
		display: 'flex',
		'& a': {
			padding: '0.5em',
		},
	},
	hand: {
		width: '100px',
	},
	text: {
		width: '40em',
	},
	right: {
		flexBasis: '50%',
		textAlign: 'left',
	},
	left: {
		flexBasis: '50%',
		textAlign: 'right',
	},
	copy: {
		display: 'flex',
		width: '100%',
		alignItems: 'baseline',
		fontSize: '0.8em',
		color: white,
		'& a': {
			color: white,
		},
	},
}

export default createUseStyles(styles)
