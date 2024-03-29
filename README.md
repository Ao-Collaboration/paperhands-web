# Paper Hand Society DAO

A simple base website for minting NFTs.

## Usage

```
yarn
yarn start
```

### Images

Update the logos:

* public/favicon.ico
* public/logo_192.png
* public/img/logo_app.png

Update the background image `public/img/background.png`.

### Content

The content is spread through various files.

Update the content in `src/config/content.tsx`.

### Terms and Conditions

Update `src/config/terms.md` with the terms and conditions.
This file supports [Markdown formatting](https://www.markdownguide.org/basic-syntax/).

#### Header / Footer

The header content is located in `src/components/Header/`
The footer content is located in `src/components/Footer/`

### Web3 - DEV NEEDED

Update `src/abi/tokenABI.json` to match the contract ABI.

Update the contract addresses in `src/config/chain.tsx`.
```js
export const getContractId = (chainId: number): string => chainId === 4 ? '0xXXX' : 'PUT CONTRACT ADDRESS HERE'`
```

Update the max supply in `src/config/chain.tsx`.

Update the mint integration in `src/components/Minting/Minting.tsx`.
Currently:

```js
	const tx = await nftContract.mint(await signer.getAddress(), 1)
```

Update the allowlist addresses in `src/config/allowlist.tsx`.
Each address is on a new line in the format `'0xaddress',`.

### Fonts

Add any required font files to `src/fonts/`.

Update the `font-face` and `font-family` in `src/index.css`.

Update the `standardFontFamily` in `src/config/jss-vars.tsx`.

### Colours

Update the colours in `src/config/colours.tsx`.

If you are using a light theme, update `TOAST_THEME` to `light`.

**Note**: If you are renaming the colours you will have to rename the references too.

### Deployment

Make sure all your work is committed.

Run `yarn deploy`.

Check `Github > Settings > Github Pages` to make sure your DNS is set correctly.
