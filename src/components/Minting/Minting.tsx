import { FC, useContext, useEffect, useState } from 'react'
import Button from '../../components/Button/Button'
import { Web3Context } from '../../context/Web3/Web3Context'
import useStyles from './Minting.styles'
import { ContractContext } from '../../context/Web3/ContractContext'
import {
	MINT_ALLOWANCE_EXCEEDED,
	MINT_BTN_TEXT,
	MINT_FAIL_GENERIC,
	MINT_FAIL_POOR,
	MINT_NOSALE_SUBTEXT,
	MINT_NOSALE_TITLE,
	MINT_NOT_ALLOWLISTED,
	MINT_PAGE_TITLE,
	MINT_SUCCESS,
	TX_PENDING,
	WEBSITE_OUTDATED,
} from '../../config/content'
import Input from '../Input/Input'
import { BigNumber, ContractTransaction } from 'ethers'
import Spinner from '../Spinner/Spinner'
import { ALLOWLIST } from '../../config/allowlist'
import { generateTree, getLeaf, getProof } from '../../utils/merkle'
import { toast } from 'react-toastify'

const Minting: FC = () => {
	const { web3Provider } = useContext(Web3Context)
	const { nftContract } = useContext(ContractContext)
	const classes = useStyles()
	const [loading, setLoading] = useState(true)
	const [contractState, setContractState] = useState(0)
	const [allowance, setAllowance] = useState(0)
	const [txPending, setTxPending] = useState(false)

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
				const addr = await signer.getAddress()
				const listed = ALLOWLIST.includes(addr.toLowerCase())
				let checkAllowance = true
				if (_contractState === 1) {
					// Presale
					if (!listed) {
						// Presale, not on list
						checkAllowance = false
						setAllowance(0)
						toast.warn(MINT_NOT_ALLOWLISTED, { autoClose: false })
					} else if (generateTree(ALLOWLIST).root !== await nftContract.merkleRoot()) {
						checkAllowance = false
						setAllowance(0)
						toast.warn(WEBSITE_OUTDATED, { autoClose: false })
					}
				}
				if (checkAllowance) {
					// Check how many tokens are claimable
					const _allowance = await nftContract.allowance(addr)
					setAllowance(_allowance)
					if (_allowance === 0) {
						// All claimed
						toast.warn(MINT_ALLOWANCE_EXCEEDED, { autoClose: false })
					}
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
		const signer = web3Provider.getSigner()
		const addr = await signer.getAddress()
		try {
			let tx: ContractTransaction
			if (contractState === 1) {
				// Presale
				const { merkleTree } = generateTree(ALLOWLIST)
				const leaf = getLeaf(addr)
				const proof = getProof(merkleTree, leaf)
				tx = await nftContract.mintPresale(qty, proof, {
					value: BigNumber.from(await nftContract.tokenPrice()).mul(qty),
				})
			} else {
				// Public
				tx = await nftContract.mintPublic(qty, {
					value: BigNumber.from(await nftContract.tokenPrice()).mul(qty),
				})
			}
			setTxPending(true)
			await tx.wait()
			setTxPending(false)
			toast.success(MINT_SUCCESS)
		} catch (err: any) { // eslint-disable-line @typescript-eslint/no-explicit-any
			if (err?.error?.code === -32000) {
				toast.error(MINT_FAIL_POOR)
			} else {
				toast.error(MINT_FAIL_GENERIC)
			}
			console.error(err.error)
		}
	}

	return (
		<div className={classes.page}>
			{loading ? (
				<Spinner />
			) : (contractState === 0 ? (
				<>
					<h1>{MINT_NOSALE_TITLE}</h1>
					<p>{MINT_NOSALE_SUBTEXT}</p>
				</>
			) : (
				<>
					<h1>{MINT_PAGE_TITLE}</h1>
					<div className={classes.mint}>
						<Input
							id="qty"
							type="number"
							defaultValue={Math.ceil(allowance / 2)}
							min={1}
							max={allowance}
							required
							disabled={allowance === 0}
						/>
						<Button onClick={doMint} disabled={txPending || allowance === 0}>
							{txPending ? TX_PENDING : MINT_BTN_TEXT}
						</Button>
					</div>
				</>
			))}
		</div>
	)
}

export default Minting
