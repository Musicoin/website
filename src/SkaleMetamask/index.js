import React, { useState } from 'react';
import Web3 from 'web3';
// import {container,metaMaskSpan,textStyle,skaleSpan,sklImgCustom} from './style'
export const SkaleMetamask = () => {
	const [sideButton, setSideButton] = useState(0);
	
	 const container = {
		position: 'fixed', top: '50%', display: 'flex',
		flexDirection: 'column', color: 'Black', zIndex: 3
	};

	 const metaMaskSpan = {
		width: sideButton != 1 && '32px',
		backgroundColor: 'white'
	};

	 const skaleSpan = {
		width: sideButton != 2 && '32px',
		backgroundColor: 'white', height: '42px'
	}

	 const textStyle = { paddingRight: '1vw' };

	 const sklImgCustom = {
		height: '32px', verticalAlign: "bottom",
		marginRight: '2px', marginTop: '5px'
	};

	let web3 = "";
	let endpoint = "https://dev-testnet-v1-1.skalelabs.com";
	let chainId = "0x54173";

	let switchToSKALE = {
		chainId: chainId,
		chainName: "SKALE Network Testnet",
		rpcUrls: [endpoint],
		nativeCurrency: {
			name: "SKALE ETH",
			symbol: "skETH",
			decimals: 18
		},
		blockExplorerUrls: [
			"https://expedition.dev/?network=SKALE&rpcUrl=" + endpoint
		]
	};

	const getWeb3=async()=> {
		web3 = window.web3;
		if (window.ethereum) {
			window.web3 = new Web3(window.ethereum);
			try {
				// Request account access if needed
				await window.ethereum.enable();
				console.log("MetaMask - Web 3 Initialized!");

				//Get user wallet accounts
				window.web3.eth.getAccounts((error, accounts) => {
					if (error) {
						console.error(error);
					}
					console.log(accounts);

					//request change to SKALE Network
					window.ethereum
						.request({
							method: "wallet_addEthereumChain",
							params: [switchToSKALE, accounts[0]]
						})
						.catch((error) => console.log(error.message));
				});
			} catch (error) {
				// User denied account access...
			}
		}
		// Legacy dapp browsers...
		else if (window.web3) {
			window.web3 = new Web3(web3.currentProvider);
			console.log("MetaMask - Web 3 Initialized!");
		}
		// Non-dapp browsers...
		else {
			console.log(
				"Non-Ethereum browser detected. You should consider trying MetaMask!"
			);
		}
	}



const addMusicToMMask =async()=>{

	const tokenAddress = '0xd00981105e61274c8a5cd5a88fe7e037d935b513';
	const tokenSymbol = 'Music';
	const tokenDecimals = 18;
	const tokenImage = 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Musicoin-MUSIC-icon.png';
	
	try {
	  // wasAdded is a boolean. Like any RPC method, an error may be thrown.
	  const wasAdded = await window.ethereum.request({
		method: 'wallet_watchAsset',
		params: {
		  type: 'ERC20',
		  options: {
			address: tokenAddress, 
			symbol: tokenSymbol, 
			decimals: tokenDecimals,
			image: tokenImage, 
		  },
		},
	  });
	
	  if (wasAdded) {
		console.log('Thanks for your interest!');
	  } else {
		console.log('Your loss!');
	  }
	} catch (error) {
	  console.log(error);
	}




}


	return (
		<div style={container}>

			<span style={metaMaskSpan} onClick={addMusicToMMask} >
				<img
					onMouseEnter={() => { setSideButton(1) }}
					onMouseLeave={() => { setSideButton(0) }}
					style={{ height: '32px' }}
					name='MetaMask'
					src="https://mining-bios.eu/wp-content/uploads/2018/09/metamask-logo.png"
				/>
				{sideButton === 1 &&
					<span style={textStyle} > Add Musicoin to MetaMask  </span>}
			</span>


			<span style={skaleSpan} onClick={getWeb3} >
				<img
					onMouseEnter={() => { setSideButton(2) }}
					onMouseLeave={() => { setSideButton(0) }}
					style={sklImgCustom}
					name='Skale'
					src="https://assets.coingecko.com/coins/images/13245/small/SKALE_token_300x300.png?1606789574"
				/>
				{sideButton === 2 &&
					<span style={textStyle}>Add Skale to MetaMask </span>}
			</span>

		</div>)
}