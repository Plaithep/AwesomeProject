import React, { Component } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";

export default CreatePollScreen = () => {

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.titleInput}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        backgroundColor: "#eaeaea"
    },
    titleInput: {
        height: 40,
        textAlign: 'center',
        textTransform: 'uppercase',
        borderBottomWidth: 2,
        borderBottomColor: '#b9c1ca'
    },
    icons: {
        color: '#2D2C2C',
        textAlign: 'center',
        paddingTop: 15,
        paddingBottom: 17,
    },
    label: {
        fontSize: 15,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
});