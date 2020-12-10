import React from 'react'
import { Platform, StyleSheet, Text, View, FlatList, } from 'react-native'
import MealsDetailComponents from '../components/MealDetailComponents'
import Color from '../constants/Color'
import { CATEGORIES, FAVORITE } from '../data/dummy-data'
import { useSelector } from 'react-redux'


const FavoriteScreen = (props) => {
    const fav = useSelector(state => state.favorites.favoriteMeals)
    const categori = useSelector(state => state.categori.categori)
    const favorite = fav.map(pl => categori.filter(cat => cat.id === pl.id_categori))
    // FAVORITE.map((pl) => CATEGORIES.filter((cat) => cat.id === pl.id_categori))
    return (
        <FlatList
            data={favorite}
            keyExtractor={(item) => item[0].id}
            renderItem={(itemData) => (
                <MealsDetailComponents
                    image={itemData.item[0].urlImage}
                    title={itemData.item[0].title}
                    onSelect={() => {
                        props.navigation.navigate('MealDetailScreen', {
                            categoriId: itemData.item[0].id
                        })
                    }}
                />
            )}
        />
    )
}

export const FavoriteScreenOption = (navData) => {
    return {
        headerTitle: "Favourite Screen",
        headerStyle: {
            backgroundColor: Platform.OS === "android" ? Color.primaryColor : "",
        },
        headerTintColor: Platform.OS === "android" ? "white" : Color.primaryColor,
        headerLeft: null,
        headerTitleStyle: {
            fontFamily: "open-sans-bold",
        },
        headerBackTitleStyle: {
            fontFamily: "open-sans",
        },
    };
};

export default FavoriteScreen

const styles = StyleSheet.create({})
