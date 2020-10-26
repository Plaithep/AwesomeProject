import React, { useState, useContext } from "react";
import styled from "styled-components";

import { UserContext } from "../context/UserContext";
import { FirebaseContext } from "../context/FirebaseContext";

import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Alert, Modal, TouchableHighlight } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default ProfileScreen = () => {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <View>
        <View>
          <View style={prop.profilepic}>
            <ProfilePicฺBorder style={component.profilepicborder}>
              <ProfilePic style={component.profilepic}>
              </ProfilePic>
            </ProfilePicฺBorder>
          </View>
        </View>

        {/* <View style={prop.editpicicon}>
          <TouchableOpacity>
            <EditPicIcon style={component.editpicicon}></EditPicIcon>
            <Text style={{ transform: [{ rotate: '90deg' }], fontSize: 10, position: 'relative', top: 165, right: 150 }}>edit</Text>
          </TouchableOpacity>
        </View> */}
      </View>

      <View style={prop.formprofile}>
        <View style={component.formprofile}>

          <Label>name</Label>
          <TextInput style={component.textinput} value="Puminan Picroh" editable={false}></TextInput>
          <Label>bio</Label>
          <TextInput style={component.textinput} value="I am new" editable={false}></TextInput>
          <Label>telephone number</Label>
          <TextInput style={component.textinput} value="062-3578734" editable={false}></TextInput>
          <Label>email</Label>
          <TextInput style={component.textinput} value="strompoom@gmail.com" editable={false}></TextInput>
          <Label>address</Label>
          <TextInput style={component.textinput} value="80/1 Male Domitory PSU" editable={false}></TextInput>
          <TextInput style={component.textinput} value="Kathu" editable={false}></TextInput>
          <TextInput style={component.textinput} value="Kathu" editable={false}></TextInput>
          <TextInput style={component.textinput} value="Phuket" editable={false}></TextInput>
        </View>
      </View>



      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>

              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <Text style={styles.textStyle}>Show Modal</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const ProfilePic = styled.View``;

const ProfilePicฺBorder = styled.View``;

const Label = styled.Text`
    flex-direction: row;
    color: #707070;
    font-weight: bold;
`;

const component = StyleSheet.create({
  profilepicborder: {
    width: 140,
    height: 140,
    borderRadius: 100,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilepic: {
    backgroundColor: 'gray',
    width: 115,
    height: 115,
    borderRadius: 100,
  },
  editpicicon: {
    backgroundColor: 'gray',
    width: 40,
    height: 40,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  formprofile: {
    width: 270,
  },
  textinput: {
    color: 'gray',
  },
})

const prop = StyleSheet.create({
  profilepic: {
    paddingTop: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editpicicon: {
    position: 'relative',
    left: 210,
    top: -39,
  },
  formprofile: {
    paddingTop: 20,
    flexDirection: 'column',
    alignItems: 'center',
  },
})

// modal
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
