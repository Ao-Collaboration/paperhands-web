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
import { BigNumber } from 'ethers'
import Spinner from '../Spinner/Spinner'

const Minting: FC = () => {
	const { web3Provider } = useContext(Web3Context)
	const { nftContract } = useContext(ContractContext)
	const classes = useStyles()
	const [loading, setLoading] = useState(true)
	const [contractState, setContractState] = useState(0)
	const [allowance, setAllowance] = useState(0)
	const [txPending, setTxPending] = useState(false)
	const [message, setMessage] = useState('')

	useEffect(() => {
		const checkStatus = async () => {
			if (!web3Provider || !nftContract) {
				return
			}
			const signer = web3Provider.getSigner()
			const _contractState = await nftContract.contractState()
			setContractState(_contractState)
			if (_contractState === 0) {
				// Sale off
				setAllowance(0)
			} else {
				const _allowance = await nftContract.allowance(await signer.getAddress())
				setAllowance(_allowance)
				if (_allowance === 0) {
					// All claimed
					setMessage('You have claimed your allowance!')
				}
			}
			setLoading(false)
		}
		checkStatus()
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
			) : (contractState === 0 ? (
				<>
					<p>Sale not yet live!</p>
					<p>Come back soon!</p>
				</>
			) : (
				<div className={classes.mint}>
					<Input
						id="qty"
						type="number"
						defaultValue={allowance}
						min={1}
						max={allowance}
						required
					/>
					<Button onClick={doMint} disabled={txPending}>
						{txPending ? TX_PENDING : MINT_BTN_TEXT}
					</Button>
				</div>
			))}
			<p>{message}</p>
		</div>
	)
}

export default Minting
