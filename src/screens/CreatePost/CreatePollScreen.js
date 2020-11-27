import React, { Component } from "react";
import { StyleSheet, TextInput, View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import styled from "styled-components";

export default CreatePollScreen = () => {

    const imagebackground = { uri: "https://i.pinimg.com/564x/36/ae/1c/36ae1c8441c61dc2e6268f8077f0dd19.jpg" };

    return (
        <ImageBackground source={imagebackground} style={styles.image}>
            <KeyboardAwareScrollView>
                <View style={styles.container}>

                    <TextInput   // ใส่ชื่อ product
                        autoCapitalize="characters"
                        placeholder="Title"
                        style={styles.titleField}
                    />

                    <View style={styles.detailcontainer}>
                        <TextInput
                            style={styles.detailfield}
                            autoCapitalize="sentences"
                            placeholder="detail"
                            numberOfLines={6}
                            multiline={true}
                        />
                    </View>

                    <View style={styles.optioncontainer}>
                        <Text style={styles.optiontitle}>Option</Text>
                        <View style={styles.optionbox}>
                            <TextInput style={styles.option} placeholder="option1"></TextInput>
                            <TextInput style={styles.option} placeholder="option2"></TextInput>
                            <Text style={styles.optiontitle}>more option</Text>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.button}>
                        <Text style={{ color: "white", fontWeight: '700', fontSize: 15 }}>Confirm</Text>
                    </TouchableOpacity>
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
    container: {
        alignItems: 'center',
        marginTop: 30,
        flex: 1,
        marginBottom: 24,
    },
    titleField: {
        borderBottomColor: '#8e93a1',
        borderBottomWidth: 1,
        height: 30,
        width: 200,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        color: '#707070',
    },
    defautProductImage: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    detailcontainer: {
        marginTop: 40,
        width: '75%',
        backgroundColor: '#FFFFFFD0',
        borderRadius: 10
    },
    detailfield: {
        textAlignVertical: 'top',
        padding: 20,
        color: '#707070',
        fontStyle: 'italic',
    },
    optioncontainer: {
        width: 300,
        marginTop: 30,
    },
    optiontitle: {
        textAlign: 'left',
        color: '#707070',
        fontWeight: 'bold'
    },
    optionbox: {
        width: '100%',
        alignItems: 'center',
        padding: 6,
        color: '#707070',
        borderRadius: 10,
        marginTop: 8,
        paddingTop: 20,
        paddingBottom: 18,
        overflow: 'hidden',
        backgroundColor: '#FFFFFFD0',
        paddingTop: 30
    },
    option: {
        textAlign: 'center',
        height: 32,
        width: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        marginBottom: 15,
        backgroundColor: 'lightgray'
    },
    button: {
        marginTop: 40,
        height: 32,
        width: 120,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        backgroundColor: 'gray'
    }
});