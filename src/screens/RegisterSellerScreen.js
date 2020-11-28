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

export default RegisterSellerScreen = () => {

    const imagebackground = { uri: "https://i.pinimg.com/564x/36/ae/1c/36ae1c8441c61dc2e6268f8077f0dd19.jpg" };

    const name = 'Puminan Picroh';
    const id = '1769900493909';
    const tel = '0623578734';
    return (
        <ImageBackground source={imagebackground} style={styles.image}>
            <KeyboardAwareScrollView>
                <View style={styles.component}>
                    <TouchableOpacity style={styles.borderpicture}>
                        <View style={styles.picture}>
                            <Ionicons
                                name="md-photos"
                                size={57}
                                color="#505050" />
                        </View>
                    </TouchableOpacity>

                    <View style={styles.card}>
                        <Text style={styles.label}>Name</Text>
                        <TextInput
                            placeholder={name}
                            style={styles.detail} />
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.label}>ID Card</Text>
                        <TextInput
                            placeholder={id}
                            keyboardType="numeric"
                            style={styles.detail} />
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.label}>Telephone</Text>
                        <TextInput
                            placeholder={tel}
                            autoCompleteType="tel"
                            keyboardType="numeric"
                            style={styles.detail} />
                    </View>

                    <View style={styles.buttoncomponent}>
                        <TouchableOpacity style={styles.confirmbutton}>
                            <Text style={styles.fontbutton}>Confirm</Text>
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
    borderpicture: {
        width: 300,
        height: 180,
        borderColor: 'gray',
        borderWidth: 1.5,
        borderStyle: 'dashed',
        borderRadius: 12,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    picture: {
        width: 265,
        height: 145,
        backgroundColor: '#B0B0B0',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        width: '75%',
        padding: 15,
        paddingLeft: 20,
        paddingRight: 20,
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
        height: 30,
        color: 'gray',
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
    },
    buttoncomponent: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 28,
    },
    confirmbutton: {
        alignItems: 'center',
        width: '30%',
        padding: 8,
        backgroundColor: '#539C65',
        borderRadius: 18,
    },
    fontbutton: {
        fontWeight: 'bold',
        color: 'white'
    }
});

