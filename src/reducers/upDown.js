const initialState = 10;
const changeTheNumber = (state = initialState, action) => {

    switch (action.type) {
        case "INCREMENT": return state + action.payload;
        case "DECREMENT": return state - action.payloadOfDec;
        default: return state;
    }

}
export default changeTheNumber;