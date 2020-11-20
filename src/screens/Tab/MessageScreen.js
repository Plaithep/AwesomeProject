import React, { Component,useContext,useState } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styled from "styled-components";
import { FirebaseContext } from "../../context/FirebaseContext";
import { firestore } from "firebase";


export default MessageScreen = ({ navigation }) => {

  return (
    <KeyboardAwareScrollView>
      <Container>

      </Container>
    </KeyboardAwareScrollView>

  );

};

const Container = styled.View`
    align-items: center;
    margin-top: 64px;
    flex: 1;
`;
