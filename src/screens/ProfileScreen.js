import React, { useContext } from "react";
import styled from "styled-components";

import { UserContext } from "../context/UserContext";
import { FirebaseContext } from "../context/FirebaseContext";

import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from "react-native";

export default ProfileScreen = () => {
  return (
    <View>

      <View>
        <View style={prop.profilepic}>
          <ProfilePic style={component.profilepic}></ProfilePic>
        </View>
      </View>

      <View style={prop.editpicicon}>
        <TouchableOpacity>
          <EditPicIcon style={component.editpicicon}></EditPicIcon>
          <Text style={{ transform: [{ rotate: '90deg' }], fontSize: 10, position: 'relative', top: 165, right: 150 }}>edit</Text>
        </TouchableOpacity>
      </View>


      <View>
        <View>

        </View>
      </View>
    </View>
  );
};

const ProfilePic = styled.View``;
const EditPicIcon = styled.View``;

const component = StyleSheet.create({
  profilepic: {
    backgroundColor: 'gray',
    width: 120,
    height: 120,
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
})

const prop = StyleSheet.create({
  profilepic: {
    paddingTop: 25,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  editpicicon: {
    position: 'relative',
    left: 210,
    top: -39,
  },
})