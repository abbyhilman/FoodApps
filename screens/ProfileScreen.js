import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { StyleSheet, Text, View, Platform, Image, SafeAreaView, ScrollView } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import { DrawerActions } from '@react-navigation/native'
import Color from '../constants/Color'
import { CATEGORIES, FAVORITE } from '../data/dummy-data'


const ProfileScreen = (props) => {
    const favorite = FAVORITE.map((pl) =>
        CATEGORIES.filter((cat) => cat.id === pl.id_categori)
    )
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ alignSelf: "center" }}>
                    <View style={styles.profileImage}>
                        <Image
                            source={{ uri: "https://www.kindpng.com/picc/b/136/1369892.png" }}
                            style={styles.image}
                            resizeMode="center"
                        ></Image>
                    </View>
                    <View style={styles.add}>
                        <MaterialIcons
                            name="verified-user"
                            color="black"
                            size={48}
                            color="#DFD8C8"
                            style={{ marginTop: 6, marginLeft: 2 }}
                        />
                    </View>
                </View>

                <View style={styles.infoContainer}>
                    <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>
                        Julie
                    </Text>
                    <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>
                        Developer
                    </Text>
                </View>

                <View style={styles.statsContainer}>
                    <View
                        style={[
                            styles.statsBox,
                            {
                                borderColor: "#DFD8C8",
                                borderLeftWidth: 1,
                                borderRightWidth: 1,
                            },
                        ]}
                    >
                        <Text style={[styles.text, { fontSize: 24 }]}>45,844</Text>
                        <Text style={[styles.text, styles.subText]}>Food Favorite</Text>
                    </View>
                </View>

                <View style={{ marginTop: 32 }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {favorite.map((fav) => (
                            <View style={styles.mediaImageContainer} key={fav[0].id}>
                                <Image
                                    source={{ uri: fav[0].urlImage }}
                                    style={styles.image}
                                    resizeMode="cover"
                                ></Image>
                            </View>
                        ))}
                    </ScrollView>
                </View>
                <Text style={[styles.subText, styles.recent]}>Information</Text>
                <View style={{ alignItems: "center" }}>
                    <View style={styles.recentItem}>
                        <View style={styles.activityIndicator}></View>
                        <View style={{ width: 250 }}>
                            <Text
                                style={[styles.text, { color: "#41444B", fontWeight: "300" }]}
                            >
                                Numbher Phone :
                            <Text style={{ fontWeight: "400" }}>089638889XXX</Text>
                            </Text>
                        </View>
                    </View>

                    <View style={styles.recentItem}>
                        <View style={styles.activityIndicator}></View>
                        <View style={{ width: 250 }}>
                            <Text
                                style={[styles.text, { color: "#41444B", fontWeight: "300" }]}
                            >
                                Email:
                            <Text style={{ fontWeight: "400" }}>andi@mail.com</Text>
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );

}

export const ProfileScreenOption = (navData) => {
    return {
        headerTitle: "Profile Screen",
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

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: 'hidden',
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined,
    },
    add: {
        backgroundColor: '#41444B',
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    infoContainer: {
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 16,
    },
    text: {
        color: '#52575D',
    },
    statsContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 32,
    },
    statsBox: {
        alignItems: 'center',
        flex: 1,
    },
    subText: {
        fontSize: 12,
        color: '#AEB5BC',
        textTransform: 'uppercase',
        fontWeight: '500',
    },
    mediaImageContainer: {
        width: 180,
        height: 200,
        borderRadius: 12,
        overflow: 'hidden',
        marginHorizontal: 10,
    },
    recent: {
        marginLeft: 78,
        marginTop: 32,
        marginBottom: 6,
        fontSize: 12,
    },
    recentItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 16,
    },
    activityIndicator: {
        backgroundColor: '#CABFAB',
        padding: 4,
        height: 12,
        width: 12,
        borderRadius: 6,
        marginTop: 3,
        marginRight: 20,
    },
})
