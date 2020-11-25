import React, { Component, useContext, useState } from "react";
import { StyleSheet, TextInput, View, TouchableOpacity, Text, ImageBackground } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styled from "styled-components";
import { FirebaseContext } from "../../context/FirebaseContext";
import { firestore } from "firebase";
import { ImagePropTypes } from "react-native";


export default MessageScreen = ({ navigation }) => {

  const imagebackground = { uri: "https://i.pinimg.com/564x/36/ae/1c/36ae1c8441c61dc2e6268f8077f0dd19.jpg" };

  return (
    <ImageBackground source={imagebackground} style={prop.image}>
      <KeyboardAwareScrollView>
        <View style={prop.container}>
          {/* chat 1 */}
          <TouchableOpacity style={prop.chats}>
            <View style={prop.profilepic}></View>
            <Text>Name Surname</Text>
          </TouchableOpacity>
          {/* chat 2 */}
          <TouchableOpacity style={prop.chats}>
            <View style={prop.profilepic}></View>
            <Text>Name Surname</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );

};

const prop = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: '5%',
  },
  chats: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  profilepic: {
    width: 60,
    height: 60,
    backgroundColor: 'gray',
    borderRadius: 60,
    marginLeft: 10,
    marginRight: 20,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
})