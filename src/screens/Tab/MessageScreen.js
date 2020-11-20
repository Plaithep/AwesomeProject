import React, { Component, useContext, useState } from "react";
import { StyleSheet, TextInput, View,   TouchableOpacity, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styled from "styled-components";
import { FirebaseContext } from "../../context/FirebaseContext";
import { firestore } from "firebase";


export default MessageScreen = ({ navigation }) => {

  return (
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
  }
})