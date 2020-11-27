import React, { Component } from "react";
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    ImageBackground
} from "react-native";

import { Ionicons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default AdminAccessScreen = () => {

    const imagebackground = { uri: "https://i.pinimg.com/564x/36/ae/1c/36ae1c8441c61dc2e6268f8077f0dd19.jpg" };

    return (
        <ImageBackground source={imagebackground} style={styles.image}>
            <KeyboardAwareScrollView>
                <View style={styles.component}>
                    <View style={styles.picture}></View>
                    <View style={styles.card}>
                        <Text style={styles.label}>Name</Text>
                        <Text style={styles.detail}>Puminan Picroh</Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.label}>ID Card</Text>
                        <Text style={styles.detail}>1769900493909</Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.label}>Telephone</Text>
                        <Text style={styles.detail}>0623578734</Text>
                    </View>

                    <View style={styles.buttoncomponent}>
                        <TouchableOpacity style={styles.confirmbutton}>
                            <Text style={styles.fontbutton}>Confirm</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.canclebutton}>
                            <Text style={styles.fontbutton}>Cancle</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </KeyboardAwareScrollView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    component: {
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 30
    },
    picture: {
        width: 330,
        height: 180,
        backgroundColor: 'gray',
        borderRadius: 10,
        marginBottom: 10
    },
    card: {
        width: '75%',
        padding: 20,
        backgroundColor: '#FFFFFFC0',
        borderRadius: 10,
        marginTop: 18
    },
    label: {
        flexDirection: 'row',
        color: '#707070',
        fontWeight: 'bold'
    },
    detail: {
        color: "gray",
    },
    buttoncomponent: {
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 28,
    },
    confirmbutton: {
        alignItems: 'center',
        width: '42%',
        padding: 8,
        backgroundColor: 'seagreen',
        borderRadius: 18,
    },
    canclebutton: {
        alignItems: 'center',
        width: '42%',
        padding: 8,
        backgroundColor: 'maroon',
        borderRadius: 18,
    },
    fontbutton: {
        fontWeight: 'bold',
        color: 'white'
    }
});

