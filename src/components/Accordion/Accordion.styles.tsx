import { createUseStyles } from 'react-jss'
import { black, teal } from '../../config/colours'
import { headingFontFamily } from '../../config/jss-vars'

const styles = {
	accordion: {
		padding: '0em 2em',
	},
	check: {
		position: 'absolute',
		cursor: 'pointer',
		width: '50vw',
		height: '3em',
		zIndex: '1',
		opacity: '0',
		'&:checked ~ p': {
			marginTop: '0',
			maxHeight: '0',
			opacity: '0',
			transform: 'translate(0, 50%)',
			paddingBottom: '0em',
		},
		'&:checked ~ h4': {
			color: black,
			'&::after': {
				content: '"+"',
			},
		},
	},
	title: {
		color: teal,
		fontSize: '1.5em',
		margin: '0',
		fontFamily: headingFontFamily,
		'&::after': {
			content: '"-"',
			paddingLeft: '0.5em',
		},
	},
	description: {
		position: 'relative',
		overflow: 'hidden',
		maxHeight: '800px',
		opacity: '1',
		transform: 'translate(0, 0)',
		marginTop: '14px',
		zIndex: '2',
		transition: 'all 0.25s ease-in-out',
		paddingBottom: '2em',
	},
}

export default createUseStyles(styles)
