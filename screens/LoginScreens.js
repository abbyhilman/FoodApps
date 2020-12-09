import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import Inputs from '../components/Inputs';
import Submit from '../components/Submit';

const LoginScreens = props => {

    return (
        <ScrollView style={{ backgroundColor: "white" }}>
            <View style={styles.container}>
                <Image
                    source={require("../assets/login.png")}
                    resizeMode="center"
                    style={styles.image}
                />
                <Text style={styles.textTitle}>Welcome back</Text>
                <Text style={styles.textBody}>Log in to your existant account</Text>
                <View style={{ marginTop: 20 }} />
                <Inputs name="Email" icon="user" />
                <Inputs name="Password" icon="lock" pass={true} />
                <Submit
                    title="LOG IN"
                    color="#0148a4"
                    clidked={() => {
                        props.navigation.navigate("container")
                    }}
                />
                <View style={{ flexDirection: "row", marginVertical: 5 }}>
                    <Text style={styles.textBody}>Don't Have an account</Text>
                    <Text
                        style={[styles.textBody, { color: "blue" }]}
                        onPress={() =>
                            props.navigation.navigate("SignUp")
                        }
                    >
                        Sign Up
                    </Text>
                </View>
            </View>
        </ScrollView>
    );

}

export default LoginScreens

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textTitle: {
        fontFamily: 'open-sans',
        fontSize: 40,
        marginVertical: 10,
    },
    textBody: {
        fontFamily: 'open-sans',
        fontSize: 16
    },
    image: {
        width: 400,
        height: 250,
        marginVertical: 10
    },
})
