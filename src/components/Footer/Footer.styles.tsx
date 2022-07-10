import { createUseStyles } from 'react-jss'
import { black } from '../../config/colours'

const styles = {
	footer: {
		background: black,
		marginTop: '2em',
	},
	inner: {
		display: 'grid',
		gridTemplateColumns: 'repeat(2, 1fr)',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '1em',
	},
	right: {
		textAlign: 'right',
	},
}

export default createUseStyles(styles)
