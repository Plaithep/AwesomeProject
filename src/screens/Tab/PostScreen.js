import React, { Component } from "react";
import { StyleSheet, TextInput, View, Text, ImageBackground } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

import styled from "styled-components";
export default PostScreen = ({ navigation }) => {

  const imagebackground = { uri: "https://i.pinimg.com/564x/36/ae/1c/36ae1c8441c61dc2e6268f8077f0dd19.jpg" };

  return (
    <ImageBackground source={imagebackground} style={styles.image}>
      <View style={styles.container}  >
        <CardContainer onPress={() => navigation.navigate("CreatePost")} >
          <FontAwesome5 name="pen-alt"
            size={70}
            style={styles.icons} />
          <Text
            style={styles.label}>
            create post
          </Text>
        </CardContainer>

        <CardContainer onPress={() => navigation.navigate("CreatePoll")} >
          <FontAwesome5 name="poll-h"
            size={70}
            style={styles.icons} />
          <Text
            style={styles.label}>
            create poll
          </Text>
        </CardContainer>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
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
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

const CardContainer = styled.TouchableOpacity`
  margin: 42px;
  marginTop: 20px;
  marginBottom: 6px;
  height: 160px;
  align-items:center;
  justify-content: center;
  border-radius: 14px
  background-color: #FFFFFFD0;
`;