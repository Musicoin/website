import React from 'react';
    //fix that If metamask not downloaded can't switch network}

export const PickedNetwork = (props) => {
    const {
        activeNet, network,
        addCoinToMetaMask,
        triggerTokenError,
        metaMaskImg,
        showUi, pickedNet, isOnline
    } = props;
    return (
        <div className={activeNet == network[pickedNet].id & isOnline
            ? 'online block'
            : 'offonline block'}
            onClick={() => {
                activeNet == network[pickedNet].id
                    ? addCoinToMetaMask(network[pickedNet].tokenAddress)
                    : triggerTokenError()
            }}
        >
            <img style={metaMaskImg}
                src={network[pickedNet].img}
            />
    
            {showUi
                ? <span> {network[pickedNet].id === activeNet & isOnline
                    ? 'Add Musicoin to ' + network[pickedNet].name
                    : network[pickedNet].id === '404'
                        ? 'No network found'
                        : network[pickedNet].id !== '403'
                            ? 'Connecting to ' + network[pickedNet].name
                            : <a href='https://metamask.io/'> No MetaMask? - click here to download</a>}
                </span>
                : null}
        </div>
    )
};