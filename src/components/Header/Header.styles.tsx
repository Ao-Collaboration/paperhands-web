import { createUseStyles } from 'react-jss'
import { teal, white } from '../../config/colours'
import { weightSemiBold } from '../../config/jss-vars'

const styles = {
	header: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '1em',
		padding: '1em',
		background: teal,
	},
	rightContent: {
		marginLeft: 'auto',
		display: 'flex',
		alignItems: 'center',
	},
	link: {
		textTransform: 'uppercase',
		color: white,
		fontSize: '1.5em',
		fontWeight: weightSemiBold,
		textDecoration: 'none',
		'&:hover': {
			textDecoration: 'underline',
		},
	},
	nav: {
		'& a': {
			margin: '0em 1em',
		},
	},
}

export default createUseStyles(styles)
