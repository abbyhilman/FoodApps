const { ActionSheetIOS } = require("react-native");
const { RECEP } = require("../../data/dummy-data");

const initialState = {
    recep: RECEP
}

const recepReducer = (state = initialState, action) => {
    return state
}

export default recepReducer