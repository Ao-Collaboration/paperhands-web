import {
	ACTION_BUTTON_1,
	ACTION_BUTTON_2,
	ACTION_LINK_1,
	ACTION_LINK_2,
} from '../../config/content'
import useStyles from './ActionPanel.styles'

const ActionPanel: React.FC = () => {
	const classes = useStyles()

	return (
		<section className={classes.actionPanel}>
			{ ACTION_LINK_1.length > 0 && (
				<div className={classes.leftPanel}>
					<a
						aria-label={ACTION_BUTTON_1}
						className={classes.button}
						href={ACTION_LINK_1}
						target="_blank"
					>
						{ACTION_BUTTON_1}
					</a>
				</div>
			)}
			{ ACTION_LINK_2.length > 0 && (
				<div className={classes.rightPanel}>
					<a
						aria-label={ACTION_BUTTON_2}
						className={classes.button}
						href={ACTION_LINK_2}
						target="_blank"
					>
						{ACTION_BUTTON_2}
					</a>
				</div>
			)}
		</section>
	)
}

export default ActionPanel
