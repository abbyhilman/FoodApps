import Favourite from "../../models/Favourite"
import { FOOD_FAVORITE } from "../action/favorites"

const initialState = {
    favoriteMeals: []
}


const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOOD_FAVORITE:
            const exitIndex = state.favoriteMeals.findIndex(fav => fav.id_categori === action.categoryId)
            if (exitIndex >= 0) {
                const updatefav = [...state.favoriteMeals]
                const remove = updatefav.map(item => {
                    return item.id_categori
                }).indexOf(action.categoryId)
                updatefav.splice(remove, 1)
                return {
                    ...state,
                    favoriteMeals: updatefav
                }
            } else {
                const userId = new Date().toISOString()
                const favorite = new Favourite(userId, action.categoryId)
                return {
                    ...state,
                    favoriteMeals: state.favoriteMeals.concat(favorite)
                }
            }


        default:
            return state
    }
}

export default favoriteReducer