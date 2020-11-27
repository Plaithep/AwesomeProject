import { useLinkProps } from "@react-navigation/native";
import React, { Component } from "react";
import { StyleSheet, TextInput, View, Text, ImageBackground } from "react-native";
import styled from "styled-components";

export default AdminScreen = () => {

    const imagebackground = { uri: "https://i.pinimg.com/564x/36/ae/1c/36ae1c8441c61dc2e6268f8077f0dd19.jpg" };

    return (
        <ImageBackground source={imagebackground} style={prop.image}>

            <View style={prop.container}>

                {/* date 1 */}
                <View name='card history'>
                    <View style={prop.leftScreen}>
                        <Text style={styles.textTime}>11 Aug 2020 <Text>17.30</Text></Text>
                    </View>

                    {/* box 1 */}
                    <View style={component.boxMessage}>
                        <View style={prop.iconcol}>
                            <View style={prop.icon}>
                                <View style={component.profilePic}></View>
                            </View>
                        </View>

                        <View style={prop.textMessage}>
                            <Text style={styles.textDelivery}>JESIGA JONE</Text>
                            <Text style={styles.textMessage}>Required access to be the seller</Text>
                        </View>
                    </View>

                    {/* box 1 */}
                    <View style={component.boxMessage}>
                        <View style={prop.iconcol}>
                            <View style={prop.icon}>
                                <View style={component.profilePic}></View>
                            </View>
                        </View>

                        <View style={prop.textMessage}>
                            <Text style={styles.textDelivery}>JESIGA JONE</Text>
                            <Text style={styles.textMessage}>Required access to be the seller</Text>
                        </View>
                    </View>
                </View>

            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    textTime: {
        color: '#707070',
        fontWeight: '700'
    },
    textMessage: {
        color: '#707070',
        fontWeight: '100',
    },
    textDelivery: {
        color: '#707070',
        fontWeight: 'bold',
    },
});

const component = StyleSheet.create({
    profilePic: {
        width: 50,
        height: 50,
        backgroundColor: '#707070',
        borderRadius: 50,
    },
    boxMessage: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#FFFFFFD0',
        padding: 10,
        borderRadius: 12,
        marginBottom: 10
    }
});

const prop = StyleSheet.create({
    container: {
        flexDirection: 'column',
        padding: 20,
        paddingTop: 15,
        width: '100%',
    },
    leftScreen: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingBottom: 10,
        paddingTop: 10,
    },
    icon: {
        flexDirection: 'row',
    },
    textMessage: {
        width: '80%',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    iconcol: {
        width: '20%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
    },
});