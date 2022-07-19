import { createUseStyles } from 'react-jss'

const styles = {
	accordion: {},
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
	},
}

export default createUseStyles(styles)
