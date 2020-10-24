import React, { Component } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

import styled from "styled-components";
export default PostScreen = ({navigation}) => {
  
  return (
    <View style={styles.container}  >
      <CardContainer onPress={() => navigation.navigate("CreatePost")} >
        <FontAwesome5 name="pen-alt"
          size={70}
          style={styles.icons} />
          <Text
            style = {styles.label}>
            create post
          </Text>
      </CardContainer>

      <CardContainer onPress={() => navigation.navigate("CreatePoll")} >
        <FontAwesome5 name="poll-h"
          size={70}
          style={styles.icons} />
          <Text
            style = {styles.label}>
            create poll
          </Text>
      </CardContainer>
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

const CardContainer = styled.TouchableOpacity`
  margin: 34px;
  marginTop: 20px;
  marginBottom: 6px;
  height: 160px;
  align-items:center;
  justify-content: center;
  border-radius: 14px
  background-color: white;
`;