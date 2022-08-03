import Button from '../../components/Button/Button'
import ConnectButton from '../../components/Button/ConnectButton'
import Footer from '../../components/Footer/Footer'
import JaggySection from '../../components/JaggySection/JaggySection'
import PageWrapper from '../../components/PageWrapper/PageWrapper'
import { white } from '../../config/colours'
import {
	MINT_HERO_BUTTON_TEXT,
	MINT_HERO_DESCRIPTION,
	MINT_HERO_SUBTEXT,
	MINT_HERO_TITLE,
} from '../../config/content'
import useStyles from './ConnectWallet.styles'

const ConnectWallet: React.FC = () => {
	const classes = useStyles()
	return (
		<PageWrapper hasHeader={false} hasFooter={false}>
			<div className={classes.page}>
				<section className={classes.hero}>
					<h1>{MINT_HERO_TITLE}</h1>
					<p>{MINT_HERO_DESCRIPTION}</p>
					<Button
						aria-label="Mint Now"
						className="primary"
						onClick={() => {
							// Navigate(MintRoute.path)
						}}
					>
						{MINT_HERO_BUTTON_TEXT}
					</Button>
					<p>
						<sub>{MINT_HERO_SUBTEXT}</sub>
					</p>
					<img className={classes.barfHand} src="/img/barf-hand.png" />
				</section>
				<JaggySection color={white} direction={'up'} />
			</div>
			<div className={classes.section}>
				<ConnectButton />
			</div>
			<Footer />
		</PageWrapper>
	)
}

export default ConnectWallet
