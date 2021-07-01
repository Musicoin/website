 export function networkReducer(state, action) {
    switch (action.type) {
        case 'active-network':
            return { ...state, activeNet: action.payload };
        case 'is-online':
            return { ...state, isOnline: action.payload };
        case 'ui-picked-network':
            return { ...state, pickedNet: action.payload };
        case 'ui-show':
            return { ...state, showUi: action.payload };
        default:
            throw new Error();
    }
}
export function errorReducer(state, action) {
    switch (action.type) {
        case 'trigger-token-err':
            return { ...state, isTokenError: !state.isTokenError ? true : false, tokenError: action.payload };
        case 'metamask-err':
            return { ...state, isMetaMaskErr: !state.isMetaMaskErr ? true : false, metaMaskErr: action.payload }
    }
}
