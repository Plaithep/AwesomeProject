import React, { Component } from "react";
import { StyleSheet, TextInput, View, Text, ImageBackground, TouchableOpacity } from "react-native";
import styled from "styled-components";

export default NotificationScreen = ({ navigation }) => {

  const imagebackground = { uri: "https://i.pinimg.com/564x/36/ae/1c/36ae1c8441c61dc2e6268f8077f0dd19.jpg" };

  return (
    <ImageBackground source={imagebackground} style={prop.image}>
      <View style={prop.container}>

        <TouchableOpacity name='card notification' style={prop.box} onPress={() => navigation.navigate("Review")}>
          <View style={component.boxMessage}>
            <View style={prop.textMessage}>
              <Text style={styles.textMessage}>PLEASE Review !!! New Chocolate Cupcake</Text>
              <Text style={styles.textTime}>3 item(s) will delevery on 12 Aug 2020</Text>
            </View>
          </View>
        </TouchableOpacity>

      </View>
    </ImageBackground>
  );
};

const StatusBar = styled.View``;

const ProfilePic = styled.View``;

const styles = StyleSheet.create({
  textTime: {
    color: '#707070',
  },
  textMessage: {
    color: '#707070',
    fontWeight: '100',
    fontWeight: '700',
  },
});

const component = StyleSheet.create({
  statusBar: {
    width: 15,
    height: 50,
    backgroundColor: '#F1D155',
  },
  profilePic: {
    width: 50,
    height: 50,
    backgroundColor: 'gray',
    borderRadius: 50,
    position: 'relative',
    left: -10,
  },
  boxMessage: {
    flexDirection: 'row',
    width: '100%',
    padding: 10,
    backgroundColor: '#FFFFFFD0',
    borderRadius: 8,
    justifyContent: 'center'
  }
});

const prop = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 30,
    paddingTop: 15,
  },
  leftScreen: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingBottom: 5,
    paddingTop: 10,
  },
  icon: {
    flexDirection: 'row',
  },
  textMessage: {
    width: '90%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  iconcol: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: '20%',
  },
  box: {
    paddingTop: 5,
    paddingBottom: 7,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
});
