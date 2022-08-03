import { createUseStyles } from 'react-jss'
import { text_shadow } from '../../config/colours'
import { headingFontFamily } from '../../config/jss-vars'

const styles = {
	page: {
		minWidth: '100vw',
		minHeight: '50vh',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		'& h1': {
			fontFamily: headingFontFamily,
			textTransform: 'uppercase',
			fontSize: '4em',
			textShadow: `3px 3px 5px ${text_shadow}`,
			margin: '0',
		},
	},
	mint: {
		display: 'flex',
		flexDirection: 'row',
		gap: '2em',
		justifyContent: 'center',
	},
}

export default createUseStyles(styles)
