# Mint Web Template

A simple base website for minting NFTs. 

## Usage

To use this template, select it when creating a new repository.

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

#### Metadata

Update the `name` in `package.json`.

Update the metadata in `public/index.html`.

Update the manifest `public/manifest.json`.


#### Header / Footer

The header content is located in `src/components/Header/`
The footer content is located in `src/components/Footer/`

### Web3

Update `src/abi/tokenABI.json` to match the contract ABI.

Update the contract addresses in `src/config/chain.tsx`.

Update the mint integration in `src/components/Minting/Minting.tsx`.
Currently:

```js
	const tx = await nftContract.mint(await signer.getAddress(), 1)
```

### Fonts

Add any required font files to `src/fonts/`.

Update the `font-face` and `font-family` in `src/index.css`.

Update the `standardFontFamily` in `src/config/jss-vars.tsx`.

### Colours

Update the colours in `src/config/colours.tsx`.

If you are using a light theme, update `TOAST_THEME` to `light`.

**Note**: If you are renaming the colours you will have to rename the references too.

### Deployment

Update the URL in `package.json` under `predeploy`.

Make sure all your work is committed.

Run `yarn deploy`.

Check `Github > Settings > Github Pages` to make sure your DNS is set correctly.
