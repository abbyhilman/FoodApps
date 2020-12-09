import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, Text, View, Platform, Switch } from 'react-native'
import HeaderButton from '../components/HeaderButton'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import Color from '../constants/Color'
import { DrawerActions } from '@react-navigation/native'
import { CATEGORIES } from '../data/dummy-data'

const FilterSwitch = props => {
    return (
        <View style={styles.FilterContainer}>
            <Text>{props.label}</Text>
            <Switch
                trackColor={{ true: Color.primaryColor }}
                thumbColor={Platform.OS == 'android' ? Color.primaryColor : ""}
                value={props.state}
                onValueChange={props.onChange}
            />
        </View>
    )
}

const FilterScreen = (props) => {
    const [isGlutenFree, setisGlutenFree] = useState(null)
    const cat = CATEGORIES
    const filtercategori = (id) => {
        const tes = cat.filter(categor => categor.id === id)
        if (isGlutenFree == null && tes[0].id == id) {
            setisGlutenFree(tes[0].id)
        } else {
            setisGlutenFree(null)
        }
    }

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            filter: isGlutenFree
        }

        console.log(appliedFilters)
    },
        [isGlutenFree],
    )

    useEffect(() => {
        props.navigation.setOptions({
            headerRight: () => {
                return (
                    <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item
                            title="Menu"
                            iconName="ios-save"
                            onPress={saveFilters}
                            color="white"
                        />
                    </HeaderButtons>
                )
            }
        })
    })

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Food Category Filter</Text>
            {cat.map(cat => (
                <FilterSwitch
                    key={cat.id}
                    label={cat.title}
                    state={cat.id == isGlutenFree ? true : false}
                    onChange={(newValue) => filtercategori(cat.id)}
                />
            ))}
        </View>
    )
}

export const FilterScreenOption = (navData) => {
    return {
        headerTitle: "Filter Categori",
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
};

export default FilterScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 22,
        margin: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    FilterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 10
    }
})
