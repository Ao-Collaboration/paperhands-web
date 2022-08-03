import useStyles, { ClassNames } from './JaggySection.styles'

interface Props {
	className?: ClassNames
	color: string
	direction: 'up' | 'down'
}

const JaggySection: React.FC<Props> = ({ color, direction }) => {
	const classes = useStyles({ color: color })

	return (
		<div
			aria-hidden
			className={direction === 'up' ? classes.jaggyUp : classes.jaggyDown}
		></div>
	)
}

export default JaggySection
