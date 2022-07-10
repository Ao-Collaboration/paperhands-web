import { FC, useContext, useState } from 'react'
import Button from '../../components/Button/Button'
import { Web3Context } from '../../context/Web3/Web3Context'
import useStyles from './Minting.styles'
import { ContractContext } from '../../context/Web3/ContractContext'
import { MINT_BTN_TEXT, MINT_PAGE_TITLE, MINT_SUCCESS, TX_PENDING } from '../../config/content'

const Minting: FC = () => {
	const { web3Provider } = useContext(Web3Context)
	const { nftContract } = useContext(ContractContext)
	const classes = useStyles()
	const [txPending, setTxPending] = useState(false)
	const [message, setMessage] = useState('')

	const doMint = async () => {
		if (!web3Provider || !nftContract) {
			return
		}
		const signer = web3Provider.getSigner()
		const tx = await nftContract.mint(await signer.getAddress(), 1)
		setTxPending(true)
		await tx.wait()
		setTxPending(false)
		setMessage(MINT_SUCCESS)
	}

	return (
		<div className={classes.page}>
			<h1>{MINT_PAGE_TITLE}</h1>
			<Button onClick={doMint} disabled={txPending}>
				{txPending ? TX_PENDING : MINT_BTN_TEXT }
			</Button>
			<p>{message}</p>
		</div>
	)
}

export default Minting
