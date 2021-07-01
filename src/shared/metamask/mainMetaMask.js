//network.404 = represents no chain / unsupported chain.
//Style.css in here only shows the "red/green state of the current picked network"
import './style.css';
import { NetWorkList } from './networksList'
import { PickedNetwork } from './pickedNetwork'
import { ErrorUi } from './errors'
import React, { useEffect, useReducer } from 'react';
import { networkReducer, errorReducer } from './reducers';

const initialState = { activeNet: "", isOnline: null, showUi: null, pickedNet: '404' };
const initErrState = { tokenError: "", isTokenError: false, isMetaMaskErr: false, metaMaskErr: "" }

export const MetamaskButtons = () => {
    const [state, dispatch] = useReducer(networkReducer, initialState);
    const [errorState, disErr] = useReducer(errorReducer, initErrState)
    const { showUi, isOnline, pickedNet, activeNet } = state;
    const { tokenError, isTokenError, metaMaskErr, isMetaMaskErr } = errorState;

    //Network Objects
    const addSKALENetwork = {
        chainId: "0x54173",
        chainName: "SKALE Network Testnet",
        rpcUrls: ['https://dev-testnet-v1-1.skalelabs.com'],
        nativeCurrency: {
            name: "SKALE ETH",
            symbol: "skETH",
            decimals: 18
        },
        blockExplorerUrls: [
            "https://expedition.dev/?network=SKALE&rpcUrl=https://dev-testnet-v1-1.skalelabs.com"
        ]
    };

    const addBSC = {
        chainId: '0x38',
        chainName: "Smart Chain",
        rpcUrls: ['https://bsc-dataseed1.ninicoin.io'],
        nativeCurrency: {
            name: "BNB",
            symbol: "BNB",
            decimals: 18
        },
        blockExplorerUrls: [
            "https://bscscan.com"
        ]
    };
    //Update Skale to our mainnet before production
    //Skale +bsc token adress before production;
    //Error "chain"
    const network = {
        '0x54173': {
            name: 'Mainnet - Skale Network', img: 'https://prismic-io.s3.amazonaws.com/skalelabs/00f856a7-efa3-4c48-8959-54e909183d3b_SKALE_token-01.png',
            id: '0x54173', tokenAddress: '0xd00981105e61274c8a5cd5a88fe7e037d935b513',
            netAdd: () => { switchChain(addSKALENetwork) }
        },
        '1': {
            name: 'Ethereum Mainnet', img: 'https://cdn.worldvectorlogo.com/logos/ethereum-1.svg',
            id: '0x1', tokenAddress: '0x35747eb4c027ebbf0a7f4e642627afcd7fd8cd7a',
            netAdd: () => { switchChain({ chainId: '0x1' }) }
        },
        '56': {
            name: 'Binance SmartChain', img: 'https://cdn.worldvectorlogo.com/logos/binance-logo.svg',
            id: '0x38' || '56', tokenAddress: '0x6ff0609046a38d76bd40c5863b4d1a2dce687f73',
            netAdd: () => { switchChain(addBSC) }
        },
        '404': {
            name: `No network found`, img: 'https://thumbs.dreamstime.com/z/not-found-icon-design-line-style-perfect-application-web-logo-presentation-template-not-found-icon-design-line-style-169941512.jpg',
            id: '404', tokenAddress: 'none',
            netAdd: () => { switchChain({ chainId: '' }) }
        },
        '403': {
            name: `No Meta Mask`, img: 'https://freeiconshop.com/wp-content/uploads/edd/download-flat.png',
            id: '403', tokenAddress: 'none',
            netAdd: () => { switchChain({ chainId: '' }) }
        }
    }

    useEffect(() => {
        window.ethereum
            ? asyncUseEffect()
            : dispatch({ type: 'ui-picked-network', payload: '403' })
    }, []);

    // Keeps the Network "Status in case attempted to logg to another network";
    // We are not using the "chainChanged" return(chainId) value beacuse it retrun value dosn't allign with eth_chainId and window.ethereum.networkVersion  
    useEffect(() => {
        if (window.ethereum) { window.ethereum.on('chainChanged', () => { asyncUseEffect(); }) }
    }, [network[pickedNet].id])

    const asyncUseEffect = async () => {
        try {

            const chainId = await window.ethereum.request({ method: 'eth_chainId' });
            network[window.ethereum.networkVersion] === undefined || network[window.ethereum.networkVersion] === undefined
                ? dispatch({ type: 'ui-picked-network', payload: '404' })
                : dispatch({ type: 'ui-picked-network', payload: window.ethereum.networkVersion });
            switchChain({ chainId: chainId })
            dispatch({ type: 'is-online', payload: true });


        } catch (err) {
            console.log(err);
        }
    }

    //SwitchChain must get an object with a chainId.
    const switchChain = async (chainObj) => {
        try {
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: chainObj.chainId }],
            })
            dispatch({ type: 'active-network', payload: chainObj.chainId });
        } catch (error) {
            // This error code indicates that the chain has not been added to MetaMask.
            if (error.code === 4902) {
                try {
                    await window.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [chainObj],
                    });
                    dispatch({ type: 'active-network', payload: chainObj.chainId });
                } catch (otherErrors) {
                    console.log(otherErrors)
                }
            }
            // This error code indicates that your Metamask is jammed with another proccses.
            if (error.code === -32002) {
                disErr({ type: 'metamask-err', payload: 'There is an onging proccses in your MetaMask' })
            }
        }
    }

    const addCoinToMetaMask = async (addrInput) => {
        console.log(addrInput);
        try {
            // wasAdded is a boolean. Like any RPC method, an error may be thrown.
            const wasAdded = await window.ethereum.request({
                method: 'wallet_watchAsset',
                params: {
                    type: 'ERC20',
                    options: {
                        address: addrInput,
                        symbol: 'MUSIC',
                        decimals: 18,
                        image: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Musicoin-MUSIC-icon.png'
                    },
                },
            });
            if (wasAdded) {
                console.log('Thanks for your interest!', addrInput);
                console.log(wasAdded);
            } else {
                console.log('Your loss!');

            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleNetworkClick = (input) => {
        isTokenError && disErr({ type: 'trigger-token-err' });
        isMetaMaskErr && disErr({ type: 'metamask-err' });
        dispatch({ type: 'ui-picked-network', payload: input })
        network[input].netAdd()
    }

    //styles
    const containerStyle = { position: 'fixed', top: '50%', zIndex: '9', fontSize: '16px', color: 'black', height: '150%' };
    const metaMaskImg = { height: '46px', width: '46px', marginBottom: '-18px', backgroundColor: 'white', borderRadius: '5%' }

    return (
        <div style={containerStyle} onMouseEnter={() => dispatch({ type: 'ui-show', payload: true })}
            onMouseLeave={() => dispatch({ type: 'ui-show', payload: false })}>
            <div style={{ marginBottom: '25px' }}>
                <img style={metaMaskImg} src={'https://docs.metamask.io/metamask-fox.svg'} />
                {showUi && <NetWorkList handleNetworkClick={handleNetworkClick} network={network} />}
            </div>

            <PickedNetwork
                activeNet={activeNet} network={network}
                addCoinToMetaMask={addCoinToMetaMask}
                triggerTokenError={() => disErr({ type: 'trigger-token-err', payload: 'Attempting to add Token to the worng network' })}
                metaMaskImg={metaMaskImg}
                showUi={showUi} pickedNet={pickedNet} isOnline={isOnline}
            />

            {showUi & isMetaMaskErr & network[pickedNet].id !== '403'
                ? <ErrorUi errorName={metaMaskErr}
                    triggerError={() => { disErr({ type: 'metamask-err' }) }} />
                : null}

            {showUi & isTokenError
                ? <ErrorUi errorName={tokenError}
                    triggerError={() => { disErr({ type: 'trigger-token-err' }) }} />
                : null}
        </div >
    )
}



