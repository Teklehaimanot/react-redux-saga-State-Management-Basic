export const deposit = (amount) => {
    return {
        type: 'deposit',
        payload: amount
    }
}


export const withdrow = (amount) => {
    return {
        type: 'withdrow',
        payload: amount
    }
}