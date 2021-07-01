
import React from 'react';

export const NetWorkList = (props) => {
    const { handleNetworkClick, network } = props;
    const btnStyle = { backgroundColor: 'white', color: 'black', borderRadius: '0% 5% 5% 0' };
    const menuImg = { height: '25px', width: '25px', marginBottom: '-8px', marginRight: '10px', backgroundColor: 'white', borderRadius: '5%' };


    return (
        <button style={btnStyle}>
            Select a Network:
            <ul style={{ textAlign: 'left', listStyle: 'none' }}>
                {Object.keys(network).reverse().map(netid =>
                    netid !== '404' & netid !== '403' ?
                        <li style={{ marginBottom: '2vh' }}
                            key={netid}
                            onClick={() => handleNetworkClick(netid)}>
                            <img style={menuImg}
                                src={network[netid].img}
                            />
                            {network[netid].name}
                        </li> : null
                )}
            </ul>
        </button>
    )

}