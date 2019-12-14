export const SIGN_IN = () => {
    return { type: 'SIGN_IN'}
};
export const SIGN_OUT = () => {
    return { type: 'SIGN_OUT'}
};
export const SHOW = () => {
    return { type: "SHOW"}
};
export const CLOSE = () => {
    return { type: "CLOSE"}
};
export const CHANGE = input => {
    return {type: "CHANGE", payload: input}
};