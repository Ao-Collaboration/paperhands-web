import { createUseStyles } from 'react-jss'
import { headingFontFamily, weightSemiBold } from '../../config/jss-vars'
import {
	white,
	off_black,
	off_white,
	cyan,
	teal,
	purple,
	off_purple,
	black,
} from '../../config/colours'

export type ClassNames =
	| 'primary'
	| 'primaryInverted'
	| 'primaryBlack'
	| 'link'
	| 'success'
	| 'error'
	| 'info'

const styles = {
	base: {
		cursor: 'pointer',
		fontFamily: headingFontFamily,
		fontSize: '1.5rem',
		lineHeight: '1rem',
		textAlign: 'center',
		display: 'inline-block',
		outline: 'none',
	},
	button: {
		composes: '$base',
		border: 'none',
		padding: '1.5rem 4rem',
		letterSpacing: 0,
		textTransform: 'uppercase',
		fontWeight: weightSemiBold,
		boxShadow: `0em 0.15em 0.65em 0em ${off_black}`,
		'&:disabled': {
			cursor: 'default',
			opacity: 0.5,
			pointerEvents: 'none',
		},
	},
	primary: {
		composes: '$button',
		background: white,
		color: teal,
		'&:hover': {
			color: black,
		},
	},
	primaryInverted: {
		composes: '$button',
		background: white,
		color: off_purple,
		'&:hover': {
			color: purple,
		},
	},
	primaryBlack: {
		composes: '$button',
		background: black,
		color: off_white,
		'&:hover': {
			color: white,
		},
	},
	link: {
		composes: '$base',
		border: 0,
		color: cyan,
		cursor: 'pointer',
		display: 'inline-block',
		padding: 0,
		backgroundColor: 'transparent',
		fontWeight: weightSemiBold,
		fontSize: '0.875rem',
		height: '0.875rem',
		lineHeight: '0.875rem',
		letterSpacing: 0.2,
		'&:disabled': {
			cursor: 'default',
			opacity: 0.5,
			pointerEvents: 'none',
		},
		'&:hover': {
			color: teal,
		},
	},
	success: {
		composes: '$primary',
	},
	error: {
		composes: '$primary',
	},
	info: {
		composes: '$primary',
	},
}

export default createUseStyles(styles)
