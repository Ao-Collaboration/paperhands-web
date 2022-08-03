import { createUseStyles } from 'react-jss'
import { white } from '../../config/colours'

export type ClassNames = 'white'

interface Props {
	color: string
}

const styles = {
	jaggyBase: {
		height: '4em',
		width: '100%',
		'&:after': {
			content: '""',
			display: 'block',
			height: '4em',
			width: '100%',
		},
	},
	jaggyUp: (props: Props) => ({
		composes: '$jaggyBase',
		'&:after': {
			clipPath:
				'polygon(0 100%, 15% 20%, 30% 85%, 40% 20%, 60% 85%, 80% 20%, 100% 100%)',
			backgroundColor: props.color,
		},
	}),
	jaggyDown: (props: Props) => ({
		composes: '$jaggyBase',
		'&:after': {
			clipPath:
				'polygon(100% 0, 100% 88%, 75% 57%, 44% 80%, 32% 36%, 0 100%, 0 0)',
			backgroundColor: props.color,
		},
	}),
	white: {
		'&:after': {
			color: white,
		},
	},
}

export default createUseStyles(styles)
