import React, { useState, useContext } from "react";
import styled from "styled-components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { UserContext } from "../context/UserContext";
import { FirebaseContext } from "../context/FirebaseContext";

import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Alert, Modal, PickerIOSComponent } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default ProfileScreen = () => {

  const name = ('puminan');
  const bio = ('i am new');
  const surname = ('picroh');
  const email = ('strompoom@gmail.com');
  const tel = ('0623578734');
  const address = ({
    detail: ('80 Moo.1 Prince of Songkla University'),
    road: ('Chao-Fa TanwanOK'),
    subdistrict: ('Kathu'),
    district: ('Kathu'),
    province: ('Phuket'),
  });

  const [modalName, setmodalName] = useState(false);
  const [modalEmail, setmodalEmail] = useState(false);
  const [modalBio, setmodalBio] = useState(false);
  const [modalTel, setmodalTel] = useState(false);
  const [modalAddress, setmodalAddress] = useState(false);

  return (
    <>

      <View style={prop.profilepic}>
        <ProfilePicฺBorder style={component.profilepicborder}>
          <ProfilePic style={component.profilepic}>
          </ProfilePic>
        </ProfilePicฺBorder>
      </View>

      <KeyboardAwareScrollView>
        <View style={prop.contentProfile}>

          {/* Modal name and surname */}
          <View style={prop.centeredView}>
            <Modal
              animationType="none"
              transparent={true}
              visible={modalName}
              onRequestClose={() => { Alert.alert("Modal has been closed."); }}>
              <View style={prop.centeredModalView}>
                <View style={component.modalView}>
                  <TextInput style={component.textinput} placeholder={name}></TextInput>
                  <TextInput style={component.textinput} placeholder={surname}></TextInput>
                  <View style={prop.rowbutton}>
                    <TouchableOpacity onPress={() => { setmodalName(!modalName); }}>
                      <Text style={{ color: 'green', fontWeight: 'bold' }}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setmodalName(!modalName); }}>
                      <Text style={{ color: 'red', fontWeight: 'bold' }}>Cancle</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
            <TouchableOpacity style={component.cardModal} onPress={() => { setmodalName(!modalName); }}>
              <View>
                <Label>name</Label>
                <Text style={component.textinformation}>{name} {surname}</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Modal bio*/}
          <View style={prop.centeredView}>
            <Modal
              animationType="none"
              transparent={true}
              visible={modalBio}
              onRequestClose={() => { Alert.alert("Modal has been closed."); }}>
              <View style={prop.centeredModalView}>
                <View style={component.modalView}>
                  <TextInput style={component.textinput} placeholder={bio}></TextInput>
                  <View style={prop.rowbutton}>
                    <TouchableOpacity onPress={() => { setmodalBio(!modalBio); }}>
                      <Text style={{ color: 'green', fontWeight: 'bold' }}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setmodalBio(!modalBio); }}>
                      <Text style={{ color: 'red', fontWeight: 'bold' }}>Cancle</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
            <TouchableOpacity style={component.cardModal} onPress={() => { setmodalBio(!modalBio); }}>
              <View>
                <Label>bio</Label>
                <Text style={component.textinformation}>{bio}</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Modal email */}
          <View style={prop.centeredView}>
            <Modal
              animationType="none"
              transparent={true}
              visible={modalEmail}
              onRequestClose={() => { Alert.alert("Modal has been closed."); }}>
              <View style={prop.centeredModalView}>
                <View style={component.modalView}>
                  <TextInput style={component.textinput} placeholder={email} autoCompleteType='email'></TextInput>
                  <View style={prop.rowbutton}>
                    <TouchableOpacity onPress={() => { setmodalEmail(!modalEmail); }}>
                      <Text style={{ color: 'green', fontWeight: 'bold' }}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setmodalEmail(!modalEmail); }}>
                      <Text style={{ color: 'red', fontWeight: 'bold' }}>Cancle</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
            <TouchableOpacity style={component.cardModal} onPress={() => { setmodalEmail(!modalEmail); }}>
              <View>
                <Label>email</Label>
                <Text style={component.textinformation}>{email}</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Modal telephone */}
          <View style={prop.centeredView}>
            <Modal
              animationType="none"
              transparent={true}
              visible={modalTel}
              onRequestClose={() => { Alert.alert("Modal has been closed."); }}>
              <View style={prop.centeredModalView}>
                <View style={component.modalView}>
                  <TextInput style={component.textinput} placeholder={tel} autoCompleteType='tel' keyboardType="numeric"></TextInput>
                  <View style={prop.rowbutton}>
                    <TouchableOpacity onPress={() => { setmodalTel(!modalTel); }}>
                      <Text style={{ color: 'green', fontWeight: 'bold' }}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setmodalTel(!modalTel); }}>
                      <Text style={{ color: 'red', fontWeight: 'bold' }}>Cancle</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
            <TouchableOpacity style={component.cardModal} onPress={() => { setmodalTel(!modalTel); }}>
              <View>
                <Label>telephone</Label>
                <Text style={component.textinformation}>{tel}</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Modal adress*/}
          <View style={prop.centeredView}>
            <Modal
              animationType="none"
              transparent={true}
              visible={modalAddress}
              onRequestClose={() => { Alert.alert("Modal has been closed."); }}>
              <View style={prop.centeredModalView}>
                <View style={component.modalView}>
                  <TextInput style={component.textinput} placeholder={address.detail}></TextInput>
                  <TextInput style={component.textinput} placeholder={address.road}></TextInput>
                  <TextInput style={component.textinput} placeholder={address.subdistrict}></TextInput>
                  <TextInput style={component.textinput} placeholder={address.district}></TextInput>
                  <TextInput style={component.textinput} placeholder={address.province}></TextInput>
                  <View style={prop.rowbutton}>
                    <TouchableOpacity onPress={() => { setmodalAddress(!modalAddress); }}>
                      <Text style={{ color: 'green', fontWeight: 'bold' }}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setmodalAddress(!modalAddress); }}>
                      <Text style={{ color: 'red', fontWeight: 'bold' }}>Cancle</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
            <TouchableOpacity style={component.cardModal} onPress={() => { setmodalAddress(!modalAddress); }}>
              <View>
                <Label>address</Label>
                <Text style={component.textinformation}>{address.detail}, {address.road}, {address.subdistrict}, {address.district}, {address.province}</Text>
              </View>
            </TouchableOpacity>
          </View>

        </View>
      </KeyboardAwareScrollView>

    </>
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
  textinformation: {
    color: 'gray',
  },
  textinput: {
    marginBottom: 20,
    padding: 2,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    width: 170,
    color: 'gray',
  },
  modalView: {
    padding: 20,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: "white",
    borderRadius: 10,
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
  cardModal: {
    width: 300,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 14,
    elevation: 2
  }
})

const prop = StyleSheet.create({
  profilepic: {
    paddingTop: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  contentProfile: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  centeredView: {
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
  },
  centeredModalView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#707070B0',
  },
  rowbutton: {
    width: 170,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
})