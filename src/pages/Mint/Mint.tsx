import Minting from '../../components/Minting/Minting'
import PageWrapper from '../../components/PageWrapper/PageWrapper'
import useStyles from './Mint.styles'

const Profile: React.FC = () => {
	const classes = useStyles()

	return (
		<PageWrapper>
			<div className={classes.page}>
				<Minting />
			</div>
		</PageWrapper>
	)
}

export default Profile
