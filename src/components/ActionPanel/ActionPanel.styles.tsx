import { createUseStyles } from 'react-jss'
import {
	black,
	dark_purple,
	green,
	off_black,
	teal,
	white,
} from '../../config/colours'
import { standardFontFamily, weightSemiBold } from '../../config/jss-vars'

const styles = {
	actionPanel: {
		display: 'flex',
		height: '15em',
		width: '100%',
	},
	innerPanel: {
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		border: '1px solid darkgrey',
	},
	leftPanel: {
		composes: '$innerPanel',
		backgroundColor: teal,
	},
	rightPanel: {
		composes: '$innerPanel',
		backgroundColor: dark_purple,
	},
	button: {
		cursor: 'pointer',
		fontFamily: standardFontFamily,
		fontWeight: weightSemiBold,
		fontSize: '1rem',
		lineHeight: '2rem',
		textAlign: 'center',
		outline: 'none',
		padding: '0.75rem 4rem',
		letterSpacing: 0,
		textTransform: 'uppercase',
		boxShadow: `0em 0.15em 0.65em 0em ${off_black}`,
		background: white,
		color: teal,
		textDecoration: 'none',
		'&:hover': {
			color: black,
		},
	},
}

export default createUseStyles(styles)
