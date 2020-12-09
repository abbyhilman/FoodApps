import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, Text, View, Platform, ScrollView, Image } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import { DrawerActions } from '@react-navigation/native'
import Color from '../constants/Color'
import { CATEGORIES, RECEP } from '../data/dummy-data'
import DefaultText from '../components/DefaultText'

const ListItem = (props) => {
    return (
        <View style={styles.listitem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    )
}



const MealsDetailScreens = (props) => {
    const catid = props.route.params?.categoriId ?? null
    const category = CATEGORIES.find((cat) => cat.id === catid)
    const recep = RECEP.filter((rec) => rec.categoryId === category.id)
    const merge = [...recep, category]
    const [urlImage, seturlImage] = useState("")
    const [isFavorite, setisFavorite] = useState(false)

    const toggleFavoriteHandle = useCallback(() => {
        setisFavorite((prevState) => !prevState)
    }, [isFavorite])

    useEffect(() => {
        if (merge[1]) {
            props.navigation.setOptions({
                headerRight: () => {
                    return (
                        <HeaderButtons HeaderButtonComponent={HeaderButton}>
                            <Item
                                title="Favorite"
                                iconName={isFavorite ? "ios-star" : "ios-star-outline"}
                                onPress={toggleFavoriteHandle}
                                color="white"
                            />
                        </HeaderButtons>
                    );
                },
            });
            seturlImage(merge[1].urlImage)
        }
    })

    if (!merge[0].complexity) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={{ uri: 'https://www.mageworx.com/blog/wp-content/uploads/2012/06/Page-Not-Found-13.jpg' }} style={{ width: 100, height: 100 }} />
            </View>
        );
    }

    return (
        <ScrollView>
            {!urlImage ? (
                <Text style={styles.title}>WAITING</Text>
            ) : (
                    <Image source={{ uri: urlImage }} style={styles.image} />
                )}

            <View>
                <View style={styles.details}>
                    <DefaultText>{merge[0].duration}m</DefaultText>
                    <DefaultText>{merge[0].complexity.toUpperCase()}</DefaultText>
                </View>
                <Text style={styles.title}>Ingredients</Text>
                {merge[0].ingredients.map((ingredients) => (
                    <ListItem key={ingredients}>{ingredients}</ListItem>
                ))}
                <Text style={styles.title}>Step</Text>
                {merge[0].steps.map((step) => (
                    <ListItem key={step}>{step}</ListItem>
                ))}
            </View>
        </ScrollView>
    );

}

export const MealsDetailOption = (navData) => {
    return {
        headerTitle: "Food Recipes",
        hearderStyle: {
            backgroundColor: Platform.OS === "android" ? Color.primaryColor : "",
        },
        headerColor: Platform.OS === "android" ? "white" : Color.primaryColor,
        headerTitleStyle: {
            fontFamily: "open-sans-bold",
        },
        headerBackTitleStyles: {
            fontFamily: "open-sans",
        },
    }
};

export default MealsDetailScreens

const styles = StyleSheet.create({
    listitem: {
        marginVertical: 10,
        marginHorizontal: 10,
        borderColor: '#CCC',
        borderWidth: 1,
        padding: 10,
    },
    image: {
        width: "100%",
        height: 200,
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around',
    },
    title: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
    },
})
