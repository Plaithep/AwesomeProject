import React, { useState, useContext, } from "react";
import styled from "styled-components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { UserContext } from "../context/UserContext";
import { FirebaseContext } from "../context/FirebaseContext";

import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Alert, Modal, PickerIOSComponent , RefreshControl } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { firestore } from "firebase";
import "firebase/auth";
import "firebase/firestore";
export default ProfileScreen = () => {

  const Firebase = useContext(FirebaseContext);
  const [ user,setUser] = useContext(UserContext);

  const name = ('Test');
  const bio = ('i am new');
  const surname = ('picroh');
  const email = ('strompoom@gmail.com');
  const tel = ('0623578734');
  const address = ({
    detail: ('Ex.80 Moo.1 Prince of Songkla University'),
    road: ('Ex.Chao-Fa TanwanOK'),
    subdistrict: ('Ex.Kathu'),
    district: ('Ex.Kathu'),
    province: ('Ex.Phuket'),
  });


  // for Modal (Pop-up)
  const [modalName, setmodalName] = useState(false);
  const [modalEmail, setmodalEmail] = useState(false);
  const [modalBio, setmodalBio] = useState(false);
  const [modalTel, setmodalTel] = useState(false);
  const [modalAddress, setmodalAddress] = useState(false);
  
 


  // for changing data
  const [newUsername, setnewUsername] = useState();
  const [newBio, setnewBio] = useState();
  const [newEmail, setnewEmail] = useState();
  const [newTel, setnewTel] = useState();
  //Address
  const [newDetail, setnewDetail] = useState();
  const [newRoad, setnewRoad] = useState();
  const [newDistrict, setnewDistrict] = useState();
  const [newSubdistrict, setnewSubdistrict] = useState();
  const [newProvince, setnewProvince] = useState()
  


  /*
    * Blew this is a Onpress function
   **/
 
   

  const Modalname = () => {
    setmodalName(!modalName);
    };

  const Updatename = async () =>{
    const uid = Firebase.getCurrentUser().uid;
    let username = newUsername;
    setUser((state) => ({...state,username}))
    try{
      firestore().collection('users').doc(uid).update({
        username : username
      })
      alert("Update Username successfully" + username)
    }catch(error){
      console.log("error@ Change Username" + error)
    }
    
  };

      //

  const UpdateBio = async () => {
    const uid = Firebase.getCurrentUser().uid;
    let bio = newBio;
    setUser((state) => ({...state,bio}))
    try{
      firestore().collection('users').doc(uid).update({
        bio : bio
      })
      alert("Update Bio successfully" + bio)
    }catch(error){
      console.log("@Error at UpdateBio " + error )
      alert("Error @ UpdateBio " + error )
    }
  }

  //

  const UpdateEmail = async () => {
    const uid = Firebase.getCurrentUser().uid;
    let email = newEmail
    setUser((state) => ({...state,email}))
    try{
      firestore().collection('users').doc(uid).update({
        email : email
      })
      alert("**Note For Authentication you still have to use same Email  Update Email successfully " + email)
    }catch(error){
      console.log("Error @ UpdateEmail" + error)
      alert("Error while trying to update Email report= " + error)
    }
  }

  //
  const UpdateTel = async () => {
    const uid = Firebase.getCurrentUser().uid;
    let tel = newTel
    setUser((state) => ({...state,tel}))
    try{
      firestore().collection('users').doc(uid).update({
        tel : tel
      })
      alert("Update Telephone number successfully " + tel)
    }catch(error){
      console.log("Error @ UpdateTel " + error)
      alert("Error while trying to update Telephone number *Report =" + error)
    }
  }

  //


  const ModalAddress = () => {
    setmodalAddress(!modalAddress);
  }

  const UpdateAddress = async () =>{
    const uid = Firebase.getCurrentUser().uid;
    let detail = newDetail;
    let road = newRoad;
    let subdistrict = newSubdistrict;
    let district = newDistrict;
    let province = newProvince
    setUser((state) => ({...state, detail}))
    try{
      firestore().collection('users').doc(uid).update({
        detail : detail,
        road : road,
        subdistrict : subdistrict,
        district : district,
        province : province
      })
      console.log("Update done new Address = "  )
    }catch(error){
      console.log("Error@ adding address" + error)
    }
  }

  return (
    <>
  
      <View style={prop.profilepic}>
        <ProfilePicฺBorder style={component.profilepicborder}>
          <ProfilePic style={component.profilepic} source={{uri: user.profilePhotoUrl}}/>
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
                  <TextInput style={component.textinput} placeholder={"New name"}
                  onChangeText={(newUsername) => setnewUsername(newUsername)}
                  value={newUsername}
                 
                  />
              
                  {/* <TextInput style={component.textinput} placeholder={surname}></TextInput> */}
                  <View style={prop.rowbutton}>
                    
    
                    <TouchableOpacity onPress={() => {Modalname(),Updatename() }}>
                    
                      <Text style={{ color: 'green', fontWeight: 'bold' }}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setmodalName(!modalName); }}>
                      <Text style={{ color: 'red', fontWeight: 'bold' }}>Cancle</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
            <TouchableOpacity style={component.cardModal} onPress={() => { setmodalName(!modalName) }}>
              <View>
                <Label>Name</Label>
                <Text style={component.textinformation}>{user.username}</Text>
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
                  <TextInput style={component.textinput} placeholder={bio} 
                  onChangeText={(newBio) => setnewBio(newBio)}
                  value={newBio}/>
                  <View style={prop.rowbutton}>
                    <TouchableOpacity onPress={() => { setmodalBio(!modalBio),UpdateBio() }}>
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
                <Label>Bio</Label>
                <Text style={component.textinformation}>{user.bio}</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Modal email */}
          <View style={prop.centeredView}>
            <Modal
              animationType="none"
              transparent={true}
              visible={modalEmail}
              onRequestClose={() => { alert("Modal has been closed."); }}>
              <View style={prop.centeredModalView}>
                <View style={component.modalView}>
                  <TextInput style={component.textinput} placeholder={email} autoCompleteType='email'  
                  onChangeText={(newEmail) => setnewEmail(newEmail)}
                  value={newEmail}/>
                  <View style={prop.rowbutton}>
                    <TouchableOpacity onPress={() => { setmodalEmail(!modalEmail),UpdateEmail() }}>
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
                <Label>E-mail</Label>
                <Text style={component.textinformation}>{user.email}</Text>
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
                  <TextInput style={component.textinput} placeholder={tel} autoCompleteType='tel' keyboardType="numeric"
                   onChangeText={(newTel) => setnewTel(newTel)}
                   value={newTel}/>
                  <View style={prop.rowbutton}>
                    <TouchableOpacity onPress={() => { setmodalTel(!modalTel),UpdateTel() }}>
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
                <Text style={component.textinformation}>{user.tel}</Text>
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
                  <TextInput style={component.textinput} placeholder={address.detail}   onChangeText={(newDetail) => setnewDetail(newDetail)} value={newDetail}/>
                  <TextInput style={component.textinput} placeholder={address.road}  onChangeText={(newRoad) => setnewRoad(newRoad)} value={newRoad}/>
                  <TextInput style={component.textinput} placeholder={address.subdistrict}  onChangeText={(newSubdistrict) => setnewSubdistrict(newSubdistrict)} value={newSubdistrict}/>
                  <TextInput style={component.textinput} placeholder={address.district} onChangeText={(newDistrict) => setnewDistrict(newDistrict)} value={newDistrict} />
                  <TextInput style={component.textinput} placeholder={address.province} onChangeText={(newProvince) => setnewProvince(newProvince)} value={newProvince}  />
                  <View style={prop.rowbutton}>
                    <TouchableOpacity onPress={() => { UpdateAddress(), ModalAddress() }}>
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
                <Text style={component.textinformation}>{user.detail} {user.road} {user.subdistrict} {user.district} {user.province}</Text>
              </View>
            </TouchableOpacity>
          </View>

        </View>
      </KeyboardAwareScrollView>

    </>
  );
};

const ProfilePic = styled.Image``;

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