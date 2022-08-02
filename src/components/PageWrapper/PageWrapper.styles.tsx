import { createUseStyles } from 'react-jss'
import { teal, white } from '../../config/colours'
import { standardFontFamily } from '../../config/jss-vars'

export type ClassNames = 'default'

const styles = {
	default: {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '100vh',
		backgroundColor: teal,
		overflowX: 'hidden',
	},
	main: {
		flex: 1,
		'& > *': {
			fontFamily: standardFontFamily,
			color: white,
		},
	},
}

export default createUseStyles(styles)
