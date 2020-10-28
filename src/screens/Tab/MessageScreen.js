import { HeaderBackground } from "@react-navigation/stack";
import React, { useState, Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Modal,
  TouchableHighlightBase,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { FirebaseContext } from "../../context/FirebaseContext";
import { firestore } from "firebase";

export default MessageScreen = ({ navigation }) => {
  const [Message, setMessagae] = useState();

  function AddRoom() {
    try {
      firestore().collection("ChatRoom").add({
        text: "Hi",
        createAt: new Date().getHours(),
      });
    } catch (error) {
      console.log(createAt);
    }
  }

  return (
    <KeyboardAwareScrollView>
      <SafeAreaView>
        <View style={prop.container}>
          <TextInput style={prop.textinput} placeholder="Name" />
          <TextInput style={prop.textinput} placeholder="Surname" />
          <TextInput style={prop.textinput} placeholder="Identity card" />

          <Text style={prop.textcotainer}>Photo of Identity card</Text>
          <TouchableOpacity style={component.uploadpic}>
            <Entypo name="camera" size={60} color="black" />
          </TouchableOpacity>
          
          <Text style={prop.textcotainer}>
            Photo of face witn Iedntify card
          </Text>
          <TouchableOpacity style={component.uploadpic}>
            <Entypo name="camera" size={60} color="black" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

const prop = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 30,
  },
  textinput: {
    marginBottom: 35,
    width: "70%",
    color: "black",
    borderBottomColor: "#707070",
    borderBottomWidth: 1,
  },
  textcotainer: {
    width: "70%",
    marginBottom: 20,
    fontWeight: "bold",
  },
});

const component = StyleSheet.create({
  uploadpic: {
    alignItems: "center",
    justifyContent: "center",
    width: "65%",
    height: 150,
    backgroundColor: "#e1e2e6",
    marginBottom: 20,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: "#707070",
    borderStyle: "dashed",
  },
});
