import { createUseStyles } from 'react-jss'

const styles = {
	page: {
		minWidth: '100vw',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	mint: {
		display: 'flex',
		flexDirection: 'row',
		gap: '2em',
		justifyContent: 'center',
	}
}

export default createUseStyles(styles)
