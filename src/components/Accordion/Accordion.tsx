import useStyles from './Accordion.styles'

interface Props {
	title: string
	expandedText: string
}

const Accordion: React.FC<Props> = ({ title, expandedText }) => {
	const classes = useStyles()

	return (
		<div className={classes.accordion}>
			<input
				aria-label={title}
				aria-haspopup={true}
				type="checkbox"
				defaultChecked
				className={classes.check}
			/>
			<h3 className={classes.title} aria-hidden>
				{title}
			</h3>
			<p className={classes.description}>{expandedText}</p>
		</div>
	)
}

export default Accordion
