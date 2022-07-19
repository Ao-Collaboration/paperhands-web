import { MintRoute } from '../routes'
import PageWrapper from '../../components/PageWrapper/PageWrapper'
import useStyles from './Home.styles'
import { useNavigate } from 'react-router-dom'
import {
	ABOUT_DESCRIPTION,
	ABOUT_TITLE,
	FAQS,
	FAQ_TITLE,
	HERO_BUTTON_TEXT,
	HERO_DESCRIPTION,
	HERO_SUBTEXT,
	HERO_TITLE,
} from '../../config/content'
import Button from '../../components/Button/Button'
import Accordion from '../../components/Accordion/Accordion'

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
				</section>

				<section id="about" className={classes.about}>
					<div>
						<h2>{ABOUT_TITLE}</h2>
						<p>{ABOUT_DESCRIPTION}</p>
					</div>
				</section>

				<section id="faq" className={classes.faq}>
					<div>
						<h2>{FAQ_TITLE}</h2>
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
				</section>
			</div>
		</PageWrapper>
	)
}

export default Home
