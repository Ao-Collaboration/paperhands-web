import { MintRoute } from '../routes'
import PageWrapper from '../../components/PageWrapper/PageWrapper'
import useStyles from './Home.styles'
import { useNavigate } from 'react-router-dom'
import {
	ABOUT_DESCRIPTION,
	ABOUT_TITLE,
	COUNCIL_DESCRIPTION_1,
	COUNCIL_DESCRIPTION_2,
	COUNCIL_TITLE,
	FAQS,
	FAQ_TITLE,
	HERO_BUTTON_TEXT,
	HERO_DESCRIPTION,
	HERO_SUBTEXT,
	HERO_TITLE,
} from '../../config/content'
import Button from '../../components/Button/Button'
import Accordion from '../../components/Accordion/Accordion'
import ActionPanel from '../../components/ActionPanel/ActionPanel'

const Home: React.FC = () => {
	const navigate = useNavigate()
	const classes = useStyles()

	return (
		<PageWrapper className="default">
			<div className={classes.page}>
				<section className={classes.hero}>
					<h1>{HERO_TITLE}</h1>
					<p>{HERO_DESCRIPTION}</p>
					<Button
						aria-label="Mint Now"
						className="primary"
						onClick={() => {
							navigate(MintRoute.path)
						}}
					>
						{HERO_BUTTON_TEXT}
					</Button>
					<p>
						<sub>{HERO_SUBTEXT}</sub>
					</p>
					<img className={classes.barfHand} src="/img/barf-hand.png" />
				</section>

				<div aria-hidden className={classes.jaggyWhite}></div>
				<section id="about" className={classes.about}>
					<div className={classes.aside}>
						<div>
							<h2>{ABOUT_TITLE}</h2>
							<p>{ABOUT_DESCRIPTION}</p>
						</div>
						<img className={classes.vineHand} src="/img/hand-with-vine.png" />
					</div>
				</section>

				<div aria-hidden className={classes.jaggyPurple}></div>
				<section id="council" className={classes.council}>
					<div className={classes.aside}>
						<img
							className={classes.longTongueHand}
							src="/img/long-tongue.png"
						/>
						<img className={classes.barcodeHand} src="/img/barcode.png" />
						<div>
							<h2>{COUNCIL_TITLE}</h2>
							<p>{COUNCIL_DESCRIPTION_1}</p>
							<p>{COUNCIL_DESCRIPTION_2}</p>
						</div>
					</div>
				</section>

				<div aria-hidden className={classes.jaggyOrange}></div>
				<section id="faq" className={classes.faq}>
					<img className={classes.pinkHand} src="/img/pink-hand.png" />
					<img className={classes.grayHand} src="/img/grayish-hand.png" />
					<div aria-hidden className={classes.paperTop}></div>
					<div className={classes.paper}>
						<h2 className={classes.centered}>{FAQ_TITLE}</h2>
						{FAQS.map(faq => {
							return (
								<Accordion
									key={faq.title}
									title={faq.title}
									expandedText={faq.description}
								/>
							)
						})}
					</div>
					<div aria-hidden className={classes.paperBottom}></div>
				</section>
				<ActionPanel />
			</div>
		</PageWrapper>
	)
}

export default Home
