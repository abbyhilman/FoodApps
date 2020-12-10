import { CATEGORIES } from "../../data/dummy-data";
import { FILTER, SHOW_CATEGORI } from "../action/categori";

const intialState = {
    categori: [],
    filtercategori: CATEGORIES
}


const categoriReducer = (state = intialState, action) => {
    switch (action.type) {
        case SHOW_CATEGORI:
            return {
                ...state, categori: action.data
            }
        case FILTER:
            const idcategori = action.id
            const filtercategori = state.filtercategori.filter(cat => cat.id !== idcategori)
            return {
                ...state,
                categori: filtercategori
            }
        default:
            return state;
    }
}

export default categoriReducer