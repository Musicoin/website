import React from 'react';

export const ErrorUi = (props) => {
    const { errorName, triggerError } = props
    return (< div className="alert">
        {errorName}
        <span className="closebtn"
            onClick={triggerError}> x </span >
    </div>)
}