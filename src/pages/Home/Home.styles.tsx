import { createUseStyles } from 'react-jss'
import { black } from '../../config/colours'

const styles = {
	page: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	section: {
		width: '100%',
		minHeight: '50vh',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		'& p': {
			maxWidth: '40em',
		},
		padding: '4em 0em',
	},
	hero: {
		composes: '$section',
	},
	about: {
		composes: '$section',
		backgroundColor: black,
	},
	faq: {
		composes: '$section',
	},
}

export default createUseStyles(styles)
