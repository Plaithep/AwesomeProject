import { useLinkProps } from "@react-navigation/native";
import React, { Component } from "react";
import { StyleSheet, TextInput, View, Text, ImageBackground } from "react-native";
import styled from "styled-components";

export default HistoryScreen = () => {

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
                                <ProfilePic style={component.profilePic}></ProfilePic>
                            </View>
                        </View>

                        <View style={prop.textMessage}>
                            <Text style={styles.textMessage}>you vote Chocolate Cake in WHAT IS YOUR FAVORITE CAKE? of SANDEA RICH's poll</Text>
                            <Text style={styles.textDelivery}>3 item(s) will delevery on 12 Aug 2020</Text>
                        </View>
                    </View>

                    {/* box 2 */}
                    <View style={component.boxMessage}>
                        <View style={prop.iconcol}>
                            <View style={prop.icon}>
                                <ProfilePic style={component.profilePic}></ProfilePic>
                            </View>
                        </View>

                        <View style={prop.textMessage}>
                            <Text style={styles.textMessage}>you vote Chocolate Cake in WHAT IS YOUR FAVORITE CAKE? of SANDEA RICH's poll</Text>
                            <Text style={styles.textDelivery}>3 item(s) will delevery on 12 Aug 2020</Text>
                        </View>
                    </View>

                </View>

                {/* date 2 */}
                <View name='card history'>
                    <View style={prop.leftScreen}>
                        <Text style={styles.textTime}>11 Aug 2020 <Text>17.30</Text></Text>
                    </View>

                    {/* box 1 */}
                    <View style={component.boxMessage}>
                        <View style={prop.iconcol}>
                            <View style={prop.icon}>
                                <ProfilePic style={component.profilePic}></ProfilePic>
                            </View>
                        </View>

                        <View style={prop.textMessage}>
                            <Text style={styles.textMessage}>you vote Chocolate Cake in WHAT IS YOUR FAVORITE CAKE? of SANDEA RICH's poll</Text>
                            <Text style={styles.textDelivery}>3 item(s) will delevery on 12 Aug 2020</Text>
                        </View>
                    </View>

                </View>
            </View>

        </ImageBackground>
    );
};

const ProfilePic = styled.View``;

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
        position: 'relative',
        left: -10,
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
        flexDirection: 'column',
        justifyContent: 'center',
        width: '20%',
        alignItems: 'center'
    },
    image: {
        flex: 1,
        resizeMode: "cover",
    },
});