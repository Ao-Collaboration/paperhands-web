import { FC, useContext, useEffect, useState } from 'react'
import Button from '../../components/Button/Button'
import { Web3Context } from '../../context/Web3/Web3Context'
import useStyles from './Minting.styles'
import { ContractContext } from '../../context/Web3/ContractContext'
import {
	MINT_BTN_TEXT,
	MINT_PAGE_TITLE,
	MINT_SUCCESS,
	TX_PENDING,
} from '../../config/content'
import Input from '../Input/Input'
import { BigNumber, ethers } from 'ethers'
import Spinner from '../Spinner/Spinner'

const Minting: FC = () => {
	const { web3Provider } = useContext(Web3Context)
	const { nftContract } = useContext(ContractContext)
	const classes = useStyles()
	const [loading, setLoading] = useState(true)
	const [allowance, setAllowance] = useState<BigNumber | null>(null)
	const [txPending, setTxPending] = useState(false)
	const [message, setMessage] = useState('')

	useEffect(() => {
		const checkAllowance = async () => {
			if (!web3Provider || !nftContract) {
				return
			}
			const signer = web3Provider.getSigner()
			const _allowance = await nftContract.allowance(await signer.getAddress())
			setAllowance(_allowance)
			if (_allowance === ethers.constants.Zero) {
				setMessage('All tokens claimed!')
			}
			setLoading(false)
		}
		checkAllowance()
	}, [web3Provider, nftContract])

	const doMint = async () => {
		const qty = (document.getElementById('qty') as HTMLInputElement)?.value
		if (!web3Provider || !nftContract || !qty) {
			return
		}
		const tx = await nftContract.mintPublic(qty, {
			value: BigNumber.from(await nftContract.tokenPrice()).mul(qty),
		})
		setTxPending(true)
		await tx.wait()
		setTxPending(false)
		setMessage(MINT_SUCCESS)
	}

	return (
		<div className={classes.page}>
			<h1>{MINT_PAGE_TITLE}</h1>
			{loading ? (
				<Spinner />
			) : (
				<>
					<Input
						id="qty"
						type="number"
						defaultValue={allowance?.toNumber() || 3}
						max={allowance?.toNumber()}
						required
					/>
					<Button onClick={doMint} disabled={txPending}>
						{txPending ? TX_PENDING : MINT_BTN_TEXT}
					</Button>
				</>
			)}
			<p>{message}</p>
		</div>
	)
}

export default Minting
