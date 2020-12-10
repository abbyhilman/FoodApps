import { CATEGORIES } from "../../data/dummy-data"
export const SHOW_CATEGORI = "SHOW_CATEGORI"
export const FILTER = "FILTER"

const loadCategori = () => {
    return new Promise((resolve) => {
        const cat = CATEGORIES
        resolve(cat)
    })
}


export const fetchCategori = () => {
    return async (dispatch) => {
        const categori = await loadCategori()
        dispatch({
            type: SHOW_CATEGORI,
            data: categori
        })
    }
}

export const filtercategori = (categori) => {
    return async (dispatch) => {
        dispatch({
            type: FILTER,
            id: categori.filter
        })
    }
}