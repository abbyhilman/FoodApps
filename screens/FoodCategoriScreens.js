import React, { useEffect, useCallback } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import HeaderButton from '../components/HeaderButton'
import {
    HeaderButtons,
    Item,
} from 'react-navigation-header-buttons';
import Color from '../constants/Color';
import { DrawerActions } from '@react-navigation/native';
import CategoriGridTitle from "../components/CategoriGridTitle";
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux'
import * as CategoriAction from '../store/action/categori';

const FoodCategoriScreens = (props) => {
    const dispatch = useDispatch()
    const categori = useSelector((state) => state.categori.categori)
    const loadCategori = useCallback(async () => {
        dispatch(CategoriAction.fetchCategori())
    }, [dispatch])

    useEffect(() => {
        loadCategori()
    }, [loadCategori])


    const renderGridItem = (ItemData) => {
        return (
            <CategoriGridTitle
                title={ItemData.item.title}
                onSelect={() => {
                    props.navigation.navigate('MealDetailScreen', {
                        categoriId: ItemData.item.id
                    })
                }}
                image={ItemData.item.urlImage}
            />
        )

    }

    return (
        <FlatList
            numColumns={2}
            data={categori}
            renderItem={renderGridItem}
            keyExtractor={(item, index) => item.id}
        />
    )
}

export const FoodScreenOptions = (navData) => {
    return {
        headerTitle: "Food Categori",
        hearderStyle: {
            backgroundColor: Platform.OS === "android" ? Color.primaryColor : "",
        },
        headerColor: Platform.OS === "android" ? "white" : Color.primaryColor,
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        title="Menu"
                        iconName="ios-menu"
                        onPress={() => {
                            navData.navigation.dispatch(DrawerActions.openDrawer());
                        }}
                        color="white"
                    />
                </HeaderButtons>
            )
        },
        headerTitleStyle: {
            fontFamily: "open-sans-bold",
        },
        headerBackTitleStyles: {
            fontFamily: "open-sans",
        },
    }
}

export default FoodCategoriScreens

const styles = StyleSheet.create({})
